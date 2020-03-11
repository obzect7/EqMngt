import request from './Request';

/**
 * Service to abstract api calls to one file - to be used in middleware
 */
class AuthService {
  // async get_item_by_id(id = null) { //get item by id
  //     const res = await request.apiCall(`${api.item}${id}`);
  //     this.handleCommonError(res);
  //     return res.body;
  // }
  //
  // async get_items(params, token) { //get items list
  //     const res = await this.apiCall(api.items, 'GET', token, params);
  //     this.handleCommonError(res);
  //     return res.body;
  // }
}

export default new AuthService();
