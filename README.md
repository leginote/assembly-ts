# assembly-ts

## 🏛️ OpenAPI 전체 API

276개 국회 API를 한 번에 사용할 수 있는 클래스입니다.

```typescript
import { OpenAPI } from '@leginote/assembly-ts';

const openapi = new OpenAPI({ 
  apiKey: 'your-api-key' 
});

// 276개 API를 직관적인 한글 메서드명으로 호출
await openapi.예산정책연구({ pIndex: '1', pSize: '10' });
await openapi.국회의원_인적사항({ HG_NM: '김영희' });
await openapi.NATV_뉴스_의장단({ COMP_MAIN_TITLE: '국정감사' });
// ... 273개 더
```

### 기존 모듈과 함께 사용

```typescript
// 기존 방식 (수동 구현)
import { getBillList } from '@leginote/assembly-ts/bill';

// 새로운 방식 (OpenAPI 전체)
import { OpenAPI } from '@leginote/assembly-ts';

const openapi = new OpenAPI({ apiKey: 'key' });
await openapi.법률안_심사_및_처리처리의안(params);
```
