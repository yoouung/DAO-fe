'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { Modal, Button } from 'antd'
import styles from './Modal.module.css'

interface DeleteProps {
  isOpen: boolean
  onClose: () => void
  handleDelete: () => void
  isClick?: boolean
}

interface Lounge {
  lounge_id: number
  name: string
  type: string
}

interface LoungeListProps {
  onClose: () => void
  handleSelectLounge: (loungeId: number) => void
  selectedLounge: number
  lounges: Lounge[] | undefined
}

interface NotiProps {
  onClose: () => void
  onConfirm: () => void
}

interface InquiryProps {
  isClick: boolean
  email: string
  contents: string
  setEmail: (email: string) => void
  setContents: (contents: string) => void
  onClose: () => void
  onConfirm: () => void
}

export function DeleteObjetModal({
  isOpen,
  isClick,
  onClose,
  handleDelete,
}: DeleteProps) {
  return (
    <Modal
      title='정말 삭제하시겠습니까?'
      open={isOpen}
      onOk={handleDelete}
      onCancel={onClose}
      footer={[
        <Button key='back' onClick={onClose}>
          취소
        </Button>,
        <Button key='delete' disabled={isClick} onClick={handleDelete}>
          삭제
        </Button>,
      ]}
    >
      <span>한 번 삭제한 오브제는 복구할 수 없습니다.</span>
    </Modal>
  )
}

export function DeleteLoungeModal({
  isOpen,
  isClick,
  onClose,
  handleDelete,
}: DeleteProps) {
  return (
    <Modal
      title='정말 삭제하시겠습니까?'
      open={isOpen}
      onOk={handleDelete}
      onCancel={onClose}
      confirmLoading={isClick}
      footer={[
        <Button key='back' onClick={onClose}>
          취소
        </Button>,
        <Button key='delete' disabled={isClick} onClick={handleDelete}>
          삭제
        </Button>,
      ]}
    >
      <span>한 번 삭제한 라운지는 복구할 수 없습니다.</span>
    </Modal>
  )
}

export function WithDrawLoungeModal({
  isOpen,
  isClick,
  onClose,
  handleDelete,
}: DeleteProps) {
  return (
    <Modal
      title='정말 탈퇴하시겠습니까?'
      open={isOpen}
      onOk={handleDelete}
      onCancel={onClose}
      confirmLoading={isClick}
      footer={[
        <Button key='back' onClick={onClose}>
          취소
        </Button>,
        <Button key='delete' disabled={isClick} onClick={handleDelete}>
          탈퇴
        </Button>,
      ]}
    >
      <span>탈퇴한 라운지에 초대시 재가입이 가능합니다.</span>
    </Modal>
  )
}

export function DeleteUserModal({
  isOpen,
  isClick,
  onClose,
  handleDelete,
}: DeleteProps) {
  return (
    <Modal
      title='정말 탈퇴하시겠습니까?'
      open={isOpen}
      onOk={handleDelete}
      onCancel={onClose}
      confirmLoading={isClick}
      footer={[
        <Button key='back' onClick={onClose}>
          취소
        </Button>,
        <Button key='delete' disabled={isClick} onClick={handleDelete}>
          확인
        </Button>,
      ]}
    >
      <span>
        회원이 작성한 컨텐츠는 자동적으로 삭제되지 않으며, 만일 삭제를 원하시면
        탈퇴 이전에 삭제가 필요합니다.
        <br />
        <br />
        회원탈퇴를 하시면 위 내용에 동의하는 것으로 간주됩니다.
      </span>
    </Modal>
  )
}

export function LoungeListModal({
  onClose,
  handleSelectLounge,
  selectedLounge,
  lounges,
}: LoungeListProps) {
  const [selectedLoungeId, setSelectedLoungeId] =
    useState<number>(selectedLounge)

  const handleSelectItem = () => {
    if (!selectedLoungeId && selectedLoungeId !== 0) {
      toast.warning('라운지를 선택해주세요.')
    } else {
      handleSelectLounge(selectedLoungeId)
    }
  }

  return (
    <div className={styles.loungeListModalContainer}>
      <div className={styles.loungeListModalTitle}>라운지 목록</div>
      <div className={styles.loungeListModalContents}>
        {lounges?.map((lounge) => (
          <div
            key={lounge.lounge_id}
            className={`${styles.loungeListModalItem} ${
              selectedLoungeId === lounge.lounge_id ? styles.selected : ''
            }`}
            onClick={() => setSelectedLoungeId(lounge.lounge_id)}
          >
            {lounge.name}
          </div>
        ))}
      </div>
      <div className={styles.modalButtonContainer}>
        <button
          className={`${styles.modalButton} ${styles.cancel}`}
          onClick={onClose}
        >
          취소
        </button>
        <button
          className={`${styles.modalButton} ${styles.confirm}`}
          onClick={handleSelectItem}
        >
          선택
        </button>
      </div>
    </div>
  )
}

export function ConfirmNotificationModal({ onClose, onConfirm }: NotiProps) {
  return (
    <Modal
      title='라운지 초대에 수락하시겠습니까?'
      open={true}
      onOk={onConfirm}
      onCancel={onClose}
      footer={[
        <Button key='back' onClick={onClose}>
          취소
        </Button>,
        <Button key='confirm' onClick={onConfirm}>
          수락
        </Button>,
      ]}
    >
      <span>수락 시 라운지로 이동합니다.</span>
      <br />
      <span>수락 이후에도 라운지를 탈퇴할 수 있습니다.</span>
    </Modal>
  )
}

export function InquiryModal({
  isClick,
  email,
  contents,
  setEmail,
  setContents,
  onClose,
  onConfirm,
}: InquiryProps) {
  return (
    <Modal
      title='1:1 문의하기'
      open={true}
      onOk={onConfirm}
      onCancel={onClose}
      footer={[
        <Button key='back' onClick={onClose}>
          취소
        </Button>,
        <Button key='confirm' disabled={isClick} onClick={onConfirm}>
          문의하기
        </Button>,
      ]}
      style={{ padding: '10px' }}
    >
      <span style={{ fontWeight: 'bold' }}>이메일</span>
      <textarea
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${styles.inquiryInput} ${styles.email}`}
        placeholder='답변을 받을 이메일을 입력해주세요.'
        maxLength={30}
      />
      <span style={{ fontWeight: 'bold' }}>문의 내용</span>
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        className={`${styles.inquiryInput} ${styles.contents}`}
        placeholder='문의 내용을 입력해주세요. 최대 300자까지 입력 가능합니다.'
        maxLength={300}
      />
    </Modal>
  )
}
