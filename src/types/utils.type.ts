import { DefineComponent, Slot } from 'vue';

/** 提取 Vue Component 之內部 props
 *
 * 會將 style、class、event 全部取出來
 */
export type ExtractComponentProps<Comp> = Comp extends new () => {
  $props: infer P;
}
  ? P
  : never;

/** 提取 Vue Component slots */
export type ExtractComponentSlots<Comp> = Comp extends new (...args: any) => {
  $slots?: infer S
}
  ? (S extends Slot ? Parameters<S>[0]
    : {}
  ) : {};
