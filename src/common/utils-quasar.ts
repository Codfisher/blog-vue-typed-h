import { Dialog, DialogChainObject, QDialog, QDialogProps } from 'quasar';
import { Component, h } from 'vue';
import { ExtractComponentProps, ExtractComponentSlots } from '../types';

/** 將 Vue SFC 元件包装為 QDialog，可以更簡單配合 $q.dialog 使用
 *
 * @param component Vue SFC 元件
 * @param props SFC 內所有參數，包含 class、style、event 等等
 * @param dialogProps QDialog 原本參數
 *
 * @example
 * ```typescript
 * const component = wrapWithDialog(EditForm, {
 *   data,
 *   onSubmit() {
 *     dialog.hide();
 *   },
 * });
 *
 * const dialog = $q.dialog({ component });
 * ```
 *
 * @example
 * ```typescript
 * $q.dialog({
 *   component: wrapWithDialog(
 *     BrandLog,
 *     {
 *       data,
 *       class: 'w-full'
 *     },
 *     {
 *       fullHeight: true,
 *     }
 *   ),
 * });
 * ```
 */
export function wrapWithDialog<Comp extends Component>(
  component: Comp,
  props?: ExtractComponentProps<Comp>,
  dialogProps?: QDialogProps,
  slots?: ExtractComponentSlots<Comp>
) {
  return h(QDialog, dialogProps, {
    default: () => h(component, props ?? {}, slots ?? {}),
  });
}

/** 使用 Quasar Dialog 開啟元件
 *
 * @param component Vue SFC 元件
 * @param props SFC 內所有參數，包含 class、style、event 等等
 * @param slots SFC 插槽
 * @param dialogProps QDialog 原本參數
 * @returns
 *
 * @example
 * ```typescript
 * const dialog = openUsingDialog(EditForm, {
 *   data,
 *   onSubmit() {
 *     dialog.hide();
 *   },
 * });
 * ```
 */
export function openUsingDialog<Comp extends Component>(
  component: Comp,
  props?: ExtractComponentProps<Comp>,
  dialogProps?: QDialogProps,
  slots?: ExtractComponentSlots<Comp>
) {
  return Dialog.create({
    component: wrapWithDialog(component, props, dialogProps, slots),
  });
}
