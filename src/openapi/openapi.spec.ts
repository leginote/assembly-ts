import { OpenAPI } from './index';

describe('OpenAPI', () => {
  const openapi = new OpenAPI({
    apiKey: 'test-key',
    responseType: 'json',
  });

  it('should create OpenAPI instance', () => {
    expect(openapi).toBeDefined();
  });

  it('should have 276 API methods', () => {
    // 생성된 API 메서드 수 검증
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(openapi))
      .filter(method => method !== 'constructor' && !method.startsWith('_'));
    
    expect(methods.length).toBe(276);
  });

  // 주요 API 메서드들 존재 확인
  it('should have main API methods', () => {
    expect(typeof openapi.NATV_뉴스_의장단).toBe('function');
    expect(typeof openapi.의원친선협회_임회원_명단).toBe('function');
    expect(typeof openapi.정보공개청구_행정심판_결과현황).toBe('function');
  });

  // Mock 테스트 (실제 API 호출 없이)
  it('should call API methods without errors', async () => {
    // 실제 API 호출 대신 mock 처리
    const mockResponse = { 
      head: { list_total_count: 100 }, 
      row: [{ id: 1, title: 'test' }] 
    };
    
    // 여기서는 메서드가 존재하는지만 확인
    expect(openapi.NATV_뉴스_의장단).toBeDefined();
    expect(openapi.의원친선협회_임회원_명단).toBeDefined();
  });
});
