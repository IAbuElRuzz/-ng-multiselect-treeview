 
export interface IDropdownSettings {
  singleSelection?: boolean;
  idField?: string;
  textField?: string;
  disabledField?: string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  allowSearchFilter?: boolean;
  limitSelection?: number;
  maxHeight?: number;
  itemsShowLimit?: number;
  clearSearchFilter?: boolean;
  defaultOpen?: boolean;
  allowRemoteDataSearch?: boolean;
  searchPlaceholderText?: string;
  noDataAvailablePlaceholderText?: string;
  noFilteredDataAvailablePlaceholderText?: string;
  closeDropDownOnSelection?: boolean;
  showSelectedItemsAtTop?: boolean;
  selectParentWithChildren?: boolean;
  selectChildrenWithParent?: boolean;
}
export class ListItem {
  id: string | number;
  text: string | number;
  isDisabled?: boolean;
  children?: ListItem[];

  public constructor(source: any) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.id = this.text = source;
      this.isDisabled = false;
    } else if (typeof source === 'object') {
      this.id = source.id;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
      // this.children = source.children?.map(child => new ListItem(child));
      this.children = source.children || [];
    }
  }
}
