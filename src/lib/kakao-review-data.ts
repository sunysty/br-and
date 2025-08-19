// 카카오톡 후기 생성기 데이터 및 타입 정의
import reviewsData from './reviews_all.json'
import { industryIcons } from './industry-icons'

export interface Industry {
  id: string
  name: string
  icon: string
  description?: string  // 선택적으로 변경
}

export interface Situation {
  id: string
  name: string
  description?: string  // 선택적으로 변경
}

export interface Tone {
  id: string
  name: string
  description?: string  // 선택적으로 변경
  example?: string      // 선택적으로 변경
}

export interface Length {
  id: string
  name: string
  description?: string  // 선택적으로 변경
}

export interface ReviewTemplate {
  [industry: string]: {
    [situation: string]: {
      [tone: string]: {
        [length: string]: string[]
      }
    }
  }
}

export interface KakaoFriend {
  id: string
  name: string
  emoji: string
  color: string
}

export interface ReviewSettings {
  industry: string
  situation: string
  tone: string
  length: string
  userName: string
  userType: 'kakao' | 'alias' | 'mosaic'  // 카카오프렌즈, 가명, 모자이크
  profileImage: 'kakao' | 'alias' | 'mosaic' | 'custom'  // 자동 연동 + 커스텀
  customProfileImage?: string  // 사용자 업로드 이미지
  backgroundColor: string
  // bubbleColor 제거
  selectedKakaoFriend: string
}

// 업종 데이터 - 진로컨설팅 추가
export const industries2: Industry[] = [
  { id: 'beauty', name: '미용실/네일샵', icon: '✂️', description: '미용 서비스' },
  { id: 'fitness', name: '헬스장/필라테스', icon: '💪', description: '운동 서비스' },
  { id: 'shopping', name: '쇼핑몰/의류', icon: '👕', description: '온라인 쇼핑' },
  { id: 'service', name: '서비스업', icon: '🏢', description: '일반 서비스' },
  { id: 'education', name: '학원/교육', icon: '📚', description: '교육 서비스' },
  { id: 'career', name: '진로컨설팅', icon: '🎯', description: '진로 상담' },
  { id: 'automotive', name: '자동차', icon: '🚗', description: '자동차 서비스' },
  { id: 'delivery', name: '배달/택배', icon: '📦', description: '배송 서비스' },
  { id: 'it', name: 'IT/앱 서비스', icon: '💻', description: 'IT 서비스' },
  { id: 'handmade', name: '수제품/공예', icon: '🎨', description: '수공예품' }
]

// reviews_all.json에서 업종 데이터를 가져와서 변환
export const industries: Industry[] = (reviewsData as any).industries.map((industry: any) => ({
  id: industry.industryId,
  name: industry.industryName,
  icon: industryIcons[industry.industryId] || '📋',
  description: `${industry.industryName} 서비스`
}))


// reviews_all.json에서 상황, 말투, 길이 데이터를 가져와서 변환
export const situations: Situation[] = (reviewsData as any).schema.situations.map((situation: any) => ({
  id: situation.id,
  name: situation.name,
  description: `${situation.name} 상황`
}))

export const tones: Tone[] = (reviewsData as any).schema.tones.map((tone: any) => ({
  id: tone.id,
  name: tone.name,
  description: `${tone.name} 말투`,
  example: `${tone.name} 말투의 예시`
}))

export const lengths: Length[] = (reviewsData as any).schema.lengths.map((length: any) => ({
  id: length.id,
  name: length.name,
  description: `${length.name} 길이의 후기`
}))

// 카카오프렌즈 캐릭터 데이터
export const kakaoFriends: KakaoFriend[] = [
  { id: 'ryan', name: '라이언', emoji: '🦁', color: '#f4a261' },
  { id: 'apeach', name: '어피치', emoji: '🍑', color: '#ffb3ba' },
  { id: 'muzi', name: '무지', emoji: '🐰', color: '#bae1ff' },
  { id: 'frodo', name: '프로도', emoji: '🐶', color: '#ffffba' },
  { id: 'neo', name: '네오', emoji: '🐱', color: '#c7ceea' },
  { id: 'tube', name: '튜브', emoji: '🐥', color: '#b5ead7' },
  { id: 'jay-g', name: '제이지', emoji: '🐰', color: '#e2b7e8' }
]

// 랜덤 이름 데이터
export const randomNames: string[] = [
  '김민지', '박서준', '이지은', '최현우', '정수빈', '강민석', '윤채영', '임태현',
  '송지호', '한예린', '오준혁', '신다은', '배성민', '류하늘', '문지우', '서은지',
  '홍준표', '김나영', '이동훈', '조미소', '장현수', '권소영', '노태준', '안지혜'
]

// 상태 메시지 데이터
export const statusMessages: string[] = [
  '졸린', '심심한', '바쁜', '행복한', '피곤한', '설레는', '신나는', '차분한',
  '열정적인', '여유로운', '집중하는', '기분좋은', '활기찬', '평온한', '즐거운'
]

// 업종별 이모지 매핑 - 진로컨설팅 추가
export const industryEmojis: { [key: string]: string[] } = {
  beauty: ['✂️', '💇‍♀️', '💅', '💄', '✨', '🎀', '💖'],
  fitness: ['💪', '🔥', '⚡', '🏃‍♀️', '🏋️‍♂️', '💯', '👍'],
  shopping: ['👕', '👗', '👠', '👜', '💳', '🛍️', '❤️'],
  service: ['👍', '😊', '✨', '💯', '🙏', '❤️', '⭐'],
  education: ['📚', '✏️', '🎓', '💡', '👨‍🏫', '📝', '🌟'],
  career: ['🎯', '💼', '🚀', '✨', '💡', '👨‍💼', '🌟'],
  automotive: ['🚗', '🔧', '⚡', '👍', '💯', '🛠️', '✨'],
  delivery: ['🚚', '📦', '⚡', '👍', '🙏', '💯', '🎯'],
  it: ['💻', '📱', '⚡', '🚀', '💡', '🔥', '👨‍💻'],
  handmade: ['🎨', '✨', '💝', '👏', '❤️', '🌟', '💖']
}

// 배경 테마 데이터 - 기본 색상 변경
export const backgroundThemes = [
  { id: 'default', name: '기본', color: '#9FC0D7' }, 
  { id: 'mint', name: '민트', color: '#a8e6cf' },
  { id: 'pink', name: '핑크', color: '#f4c2c2' },
  { id: 'purple', name: '퍼플', color: '#d8b4fe' },
  { id: 'gray', name: '그레이', color: '#d1d5db' },
  { id: 'yellow', name: '옐로우', color: '#fde047' }
]

// 말풍선 색상 데이터 제거 - 기본 색상으로 고정
