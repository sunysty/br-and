// 카카오톡 후기 생성 유틸리티

import reviewsData from './reviews_all.json'
import { industryEmojis, randomNames, statusMessages, kakaoFriends } from './kakao-review-data'
import type { ReviewSettings } from './kakao-review-data'

// 랜덤 선택 함수
export function randomSelect<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// 이모지 랜덤 삽입 함수 (30% 확률)
export function addRandomEmojis(text: string, industry: string): string {
  const sentences = text.split(/([!?.~])/)
  const emojis = industryEmojis[industry] || ['😊', '👍', '✨']
  
  return sentences.map((sentence) => {
    // 문장 끝 구두점인 경우 30% 확률로 이모지 추가
    if (/[!?.~]/.test(sentence) && Math.random() < 0.3) {
      return sentence + ' ' + randomSelect(emojis)
    }
    return sentence
  }).join('')
}

// 시간 생성 함수 (12시간제, 오전/오후)
export function generateRealisticTime(): string {
  const hour = Math.floor(Math.random() * 12) + 1  // 1-12
  const minute = Math.floor(Math.random() * 60)    // 0-59
  const period = Math.random() > 0.5 ? '오후' : '오전'
  
  const formattedMinute = minute.toString().padStart(2, '0')
  return `${period} ${hour}:${formattedMinute}`
}

// 후기 생성 함수
export function generateReview(settings: ReviewSettings, useEmoji: boolean = true): string {
  const { industry, situation, tone, length } = settings
  
  // reviews_all.json에서 해당 업종의 후기들 가져오기
  const industryData = (reviewsData as any).industries.find((ind: any) => ind.industryId === industry)
  
  if (!industryData) {
    return '후기를 생성할 수 없습니다. 업종을 확인해주세요.'
  }
  
  // 조건에 맞는 후기들 필터링
  const matchingReviews = industryData.reviews.filter((review: any) => 
    review.situationId === situation && 
    review.toneId === tone && 
    review.length === length
  )
  
  if (matchingReviews.length === 0) {
    return '후기를 생성할 수 없습니다. 설정을 확인해주세요.'
  }
  
  // 랜덤 후기 선택
  const selectedReview = randomSelect(matchingReviews) as any
  let reviewContent = selectedReview.content
  
  // 이모지 추가 (옵션이 켜져있을 때만)
  if (useEmoji) {
    reviewContent = addRandomEmojis(reviewContent, industry)
  }
  
  return reviewContent
}

// 사용자 이름 생성 함수 - 모자이크 처리 개선
export function generateUserName(settings: ReviewSettings): string {
  const { userType, selectedKakaoFriend, userName } = settings
  
  switch (userType) {
    case 'kakao':
      // 카카오프렌즈: 상태메시지 + 캐릭터명 (기존 랜덤과 동일)
      const status = randomSelect(statusMessages)
      const friend = kakaoFriends.find(f => f.id === selectedKakaoFriend) || kakaoFriends[0]
      return `${status} ${friend.name}`
      
    case 'alias':
      // 가명: 랜덤 이름
      return randomSelect(randomNames)
      
    case 'mosaic':
      // 모자이크: 상태 + 카카오프렌즈 이름 (카카오와 동일한 형식)
      const mosaicStatus = randomSelect(statusMessages)
      const mosaicFriend = kakaoFriends.find(f => f.id === selectedKakaoFriend) || kakaoFriends[0]
      return `${mosaicStatus} ${mosaicFriend.name}`
      
    default:
      return randomSelect(randomNames)
  }
}

// 프로필 이미지 경로 생성 함수
export function getProfileImagePath(settings: ReviewSettings): string {
  const { userType, selectedKakaoFriend, customProfileImage } = settings
  
  if (customProfileImage) {
    return customProfileImage
  }
  
  switch (userType) {
    case 'kakao':
      // 카카오프렌즈: ka_1.png ~ ka_7.png
      const friendIndex = kakaoFriends.findIndex(f => f.id === selectedKakaoFriend) + 1
      return `/ka_${friendIndex}.png`
      
    case 'alias':
      // 가명: profile.png
      return '/profile.png'
      
    case 'mosaic':
      // 모자이크: 특별한 이미지 없음 (CSS로 처리)
      return ''
      
    default:
      return '/profile.png'
  }
}

// 사업자 답변 생성 함수
export function generateBusinessReply(industry: string, tone: string): string {
  const replyTemplates: { [key: string]: { [key: string]: string[] } } = {
    beauty: {
      friendly: ['감사해요! 다음에도 예쁘게 해드릴게요 ㅎㅎ', '고마워요~ 또 오세요!'],
      polite: ['소중한 후기 감사합니다. 항상 최선을 다하겠습니다.', '감사합니다. 다음에도 만족스러운 서비스 제공하겠습니다.'],
      casual: ['고마워요! 또 와요~', '감사합니다 ^^'],
      enthusiastic: ['와!! 정말 감사해요!! 또 와주세요!!', '최고!! 감사합니다!!!'],
      calm: ['감사합니다. 좋은 하루 되세요.', '소중한 후기 감사드립니다.']
    },
    fitness: {
      friendly: ['운동 화이팅! 다음에도 함께해요!', '고생하셨어요! 또 만나요 ㅎㅎ'],
      polite: ['열심히 운동해주셔서 감사합니다.', '앞으로도 건강한 운동 도와드리겠습니다.'],
      casual: ['수고하셨어요! 또 와요~', '감사해요! 운동 화이팅!'],
      enthusiastic: ['정말 멋져요!! 계속 화이팅!!', '최고!! 다음에도 열심히 해요!!'],
      calm: ['꾸준한 운동으로 건강하세요.', '감사합니다. 좋은 결과 있으시길.']
    },
    career: {
      friendly: ['진로 상담이 도움되어서 기뻐요! 응원할게요 ㅎㅎ', '앞으로도 좋은 결과 있으시길!'],
      polite: ['상담이 도움이 되셨다니 감사합니다. 좋은 결과 있으시기 바랍니다.', '소중한 시간 함께해주셔서 감사합니다.'],
      casual: ['도움되어서 다행이에요! 화이팅~', '감사해요! 좋은 결과 있으시길!'],
      enthusiastic: ['정말 기뻐요!! 꼭 성공하실 거예요!!', '최고!! 응원할게요!!!'],
      calm: ['차근차근 준비하시면 좋은 결과 있으실 겁니다.', '감사합니다. 항상 응원하겠습니다.']
    }
  }
  
  // 기본 템플릿 (다른 업종들)
  const defaultTemplates = {
    friendly: ['감사해요! 또 이용해주세요 ㅎㅎ', '고마워요~ 다음에도 와요!'],
    polite: ['소중한 후기 감사합니다.', '감사합니다. 더 나은 서비스로 보답하겠습니다.'],
    casual: ['감사해요! 또 와요~', '고마워요 ^^'],
    enthusiastic: ['정말 감사해요!! 또 와주세요!!', '최고!! 감사합니다!!!'],
    calm: ['감사합니다. 좋은 하루 되세요.', '소중한 후기 감사드립니다.']
  }
  
  const templates = replyTemplates[industry] || defaultTemplates
  const toneTemplates = templates[tone] || templates.friendly
  
  return randomSelect(toneTemplates)
}

// 로컬스토리지 저장/불러오기
export function saveReviewToHistory(reviewData: any): void {
  try {
    const history = getReviewHistory()
    history.unshift(reviewData)
    
    // 최대 10개까지만 저장
    if (history.length > 10) {
      history.splice(10)
    }
    
    localStorage.setItem('kakao-review-history', JSON.stringify(history))
  } catch (error) {
    console.error('히스토리 저장 실패:', error)
  }
}

export function getReviewHistory(): any[] {
  try {
    const saved = localStorage.getItem('kakao-review-history')
    return saved ? JSON.parse(saved) : []
  } catch (error) {
    console.error('히스토리 불러오기 실패:', error)
    return []
  }
}

export function saveSettings(settings: ReviewSettings): void {
  try {
    localStorage.setItem('kakao-review-settings', JSON.stringify(settings))
  } catch (error) {
    console.error('설정 저장 실패:', error)
  }
}

export function loadSettings(): Partial<ReviewSettings> {
  try {
    const saved = localStorage.getItem('kakao-review-settings')
    return saved ? JSON.parse(saved) : {}
  } catch (error) {
    console.error('설정 불러오기 실패:', error)
    return {}
  }
}
