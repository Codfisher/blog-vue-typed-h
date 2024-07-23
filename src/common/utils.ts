import { Component, h } from 'vue';
import { ExtractComponentProps, ExtractComponentSlots } from '../types';

/** 元件繼承參數
 * 
 * [文檔](https://cn.vuejs.org/guide/components/attrs.html#fallthrough-attributes)
 */
export interface InheritAttr {
  class?: string;
  style?: Record<string, string>;
  /** 為了讓範例精簡，這裡只列出 click，可以自行追加基礎事件 */
  onClick?: (event: MouseEvent) => void;
}

/** Veu h function 有型別推導的版本
 * 
 * [何謂 h function](https://cn.vuejs.org/guide/extras/render-function.html)
 * 
 * @param component Vue SFC 元件或 html tag 名稱
 * @param props SFC 內所有參數，包含 class、style、event 等等
 * @param slots SFC 插槽
 */
export function typedH(
  component: string,
  props?: string,
): ReturnType<typeof h>
export function typedH<Comp extends Component>(
  component: string,
  props?: InheritAttr,
  slots?: ExtractComponentSlots<Comp>,
): ReturnType<typeof h>
export function typedH<Comp extends Component>(
  component: Comp,
  props?: ExtractComponentProps<Comp> & InheritAttr,
  slots?: ExtractComponentSlots<Comp>,
): ReturnType<typeof h>
export function typedH(
  component: any,
  props?: any,
  slots?: any,
) {
  if (!slots) {
    return h(component, props);
  }
  return h(component, props, slots);
}
