import React from 'react'
import styles from './Chat.module.css'
import { extractHourMinute } from '@utils/formatDatetime'
import useUserStore from '@store/userStore'
import Image from 'next/image'

interface ChattingProps {
  userName: string
  userId: number
  profileImg: string
  content: string
  datetime?: string
}

interface EnterAlertProps {
  message: string
}

export function ChatMessage({
  userName,
  userId,
  profileImg,
  content,
  datetime,
  innerRef,
}: ChattingProps & { innerRef?: React.Ref<HTMLDivElement> }) {
  const myUserId = useUserStore((state) => state.userId)
  const isMyChat = userId === myUserId

  return datetime ? (
    isMyChat ? (
      <div className={styles.myChat} ref={innerRef}>
        <div className={styles.contentsAndDatetime}>
          <div className={styles.datetime}>{extractHourMinute(datetime)}</div>
          <div className={`${styles.contents} ${styles.isMine}`}>{content}</div>
        </div>
      </div>
    ) : (
      <div className={styles.chat} ref={innerRef}>
        <Image src={profileImg} alt='profile' className={styles.profileImg} />
        <div className={styles.chatContents}>
          <span className={styles.userName}>{userName}</span>
          <div className={styles.contentsAndDatetime}>
            <div className={`${styles.contents} ${styles.isOther}`}>
              {content}
            </div>
            <div className={styles.datetime}>{extractHourMinute(datetime)}</div>
          </div>
        </div>
      </div>
    )
  ) : (
    <div className={styles.chat} style={{ gap: 0 }}>
      <Image src={profileImg} alt='profile' className={styles.profileImg} />
      <div className={styles.chatContents} style={{ marginLeft: '5px' }}>
        <span className={styles.userName} style={{ fontSize: '13px' }}>
          {userName}
        </span>
        <div className={styles.preview} style={{ fontSize: '12px' }}>
          {content}
        </div>
      </div>
    </div>
  )
}

export function AlertUserEnter({ message }: EnterAlertProps) {
  return (
    <div className={styles.enterAlert}>
      <span>{message}</span>
    </div>
  )
}
