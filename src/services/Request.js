/**
 * Rest Server 를 호출하기 위한 공통 클래스
 */
class Request {
  constructor() {
    this.api_url = 'http://localhost:3030';
  }

  /**
   * rest API url 을 호출하기 위한 공통 펑션
   * @param {string} url - url to fetch
   * @param {string} method - method get or post
   * @param {string|boolean} token  - 인증토큰 token
   * @param {object|null} params - params 개체
   */
  async apiCall(url, method = 'GET', token = false, params = null) {
    let payload = {
      method,
      mode: 'cors',
      headers: this.buildHeaders(token),
    };
    if (params) {
      payload.body = JSON.stringify(params);
    }
    const res = await fetch(`${this.api_url}${url}`, payload);
    const status = res.status;
    const body = await res.json();
    return {status, body};
  }

  /**
   *  http headers common 세팅
   * @param {string|boolean} token
   */
  buildHeaders(token = false) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    if (token) {
      headers.append('Authorization', `Token ${token}`);
    }

    return headers;
  }

  /**
   * rest url 호출에 실패했을 경우 common error 발생
   * @param {object} response
   * @param {bool} auth - check for unauth error or not
   */
  handleCommonError(response, auth = false) {
    if (response.status === 401 && auth) {
      // window.location(api.login)
    }
    if (response.status !== 200 && response.status !== 201) {
      throw new Error(response.status);
    }
    return;
  }
}

export default new Request();
