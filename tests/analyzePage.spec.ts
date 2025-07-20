import { test } from '@playwright/test';
import fs from 'fs';

test('🔍 Ultra rich analysis of webpage for manual test generation', async ({ page }) => {
  const url = 'https://www.youtube.com/'; // Replace as needed
  await page.goto(url);
  await page.waitForLoadState('networkidle');

  const elements = await page.$$eval('*', (nodes) => {
    const getXPath = (element: Element): string => {
      if (element.id) return `//*[@id="${element.id}"]`;
      const parts: string[] = [];
      while (element && element.nodeType === Node.ELEMENT_NODE) {
        let index = 1;
        let sibling = element.previousElementSibling;
        while (sibling) {
          if (sibling.nodeName === element.nodeName) index++;
          sibling = sibling.previousElementSibling;
        }
        const tagName = element.nodeName.toLowerCase();
        const part = `${tagName}[${index}]`;
        parts.unshift(part);
        element = element.parentElement!;
      }
      return '/' + parts.join('/');
    };

    return nodes.map((el) => {
      const rect = el.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(el);
      const visible = rect.width > 0 && rect.height > 0 && computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden';

      if (!visible) return null;

      const attrs: Record<string, string | null> = {};
      for (const attr of el.getAttributeNames()) {
        attrs[attr] = el.getAttribute(attr);
      }

      return {
        tag: el.tagName.toLowerCase(),
        text: (el instanceof HTMLElement ? el.innerText?.trim() : undefined),
        role: el.getAttribute('role'),
        name: el.getAttribute('name'),
        id: el.getAttribute('id'),
        class: el.getAttribute('class'),
        placeholder: el.getAttribute('placeholder'),
        ariaLabel: el.getAttribute('aria-label'),
        ariaHidden: el.getAttribute('aria-hidden'),
        ariaRole: el.getAttribute('aria-role'),
        alt: el.getAttribute('alt'),
        title: el.getAttribute('title'),
        type: el.getAttribute('type'),
        href: (el as HTMLAnchorElement).href || null,
        src: (el as HTMLImageElement).src || null,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        },
        styles: {
          display: computedStyle.display,
          visibility: computedStyle.visibility,
          color: computedStyle.color,
          fontSize: computedStyle.fontSize,
          fontWeight: computedStyle.fontWeight,
          backgroundColor: computedStyle.backgroundColor,
        },
        attributes: attrs,
        xpath: getXPath(el),
        clickable:
          (typeof (el as any).onclick === 'function') ||
          ['button', 'a', 'input'].includes(el.tagName.toLowerCase()) ||
          computedStyle.cursor === 'pointer',
        interactive: ['a', 'button', 'input', 'select', 'textarea'].includes(el.tagName.toLowerCase()) ||
          el.getAttribute('role')?.includes('button') ||
          el.getAttribute('tabindex') !== null
      };
    }).filter(Boolean);
  });

  const summary = {
    url,
    title: await page.title(),
    totalVisibleElements: elements.length,
    interactiveElements: elements.filter((e): e is NonNullable<typeof e> => !!e && e.interactive),
    clickableElements: elements.filter((e): e is NonNullable<typeof e> => !!e && e.clickable),
    inputs: elements.filter((e): e is NonNullable<typeof e> => !!e && ['input', 'textarea', 'select'].includes(e.tag)),
    links: elements.filter((e): e is NonNullable<typeof e> => !!e && e.tag === 'a'),
    images: elements.filter((e): e is NonNullable<typeof e> => !!e && e.tag === 'img'),
    buttons: elements.filter((e): e is NonNullable<typeof e> => !!e && (e.tag === 'button' || e.role === 'button')),
    rawElements: elements,
    notes: 'This file contains deep metadata of each visible, styled, interactive DOM element. Ideal for automated or manual QA scenario generation.'
  };

  fs.writeFileSync('rich-analysis.json', JSON.stringify(summary, null, 2));
  console.log('✅ Ultra rich analysis saved to rich-analysis.json');
});
