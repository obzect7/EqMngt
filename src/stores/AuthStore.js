import {observable, computed, action, runInAction} from 'mobx';
import authService from '../services/AuthService';

class AuthStore {
  @observable isLoading = true;
  @observable isFailure = false;

  // @computed
  // get total() {
  //     return this.items.length
  // }

  // @action
  // async getItems() {
  //     try {
  //         const data = await authService.get_items()
  //         runInAction(() => {
  //             this.isLoading = false
  //             this.items = data.data
  //         })
  //     } catch (e) {
  //         runInAction(() => {
  //             this.isLoading = false
  //             this.isFailure = true
  //             this.items = []
  //         })
  //     }
  // }
  //
  // @action
  // async getItemById(id) {
  //     try {
  //         const data = await ApiService.get_item_by_id(id)
  //         runInAction(() => {
  //             this.isLoading = false
  //             this.item = data
  //         })
  //     } catch (e) {
  //         runInAction(() => {
  //             this.isLoading = false
  //             this.isFailure = true
  //             this.item = {}
  //         })
  //     }
  // }
}

export default new AuthStore();
export {AuthStore};
