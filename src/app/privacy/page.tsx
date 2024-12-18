import styles from './page.module.css'
import BackHeader from '@/components/BackHeader'

export default function Privacy() {
  return (
    <>
      <BackHeader />
      <div className={styles.container}>
        <div className={styles.title}>개인정보 처리방침</div>
        <div className={styles.content}>
          <div className={styles.section}>
            <p className={styles.text}>
              개인정보보호법에 따라 다오에 회원가입 신청하시는 분께 수집하는
              개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및
              이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내
              드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>수집하는 개인정보</h2>
            <p className={styles.text}>
              이용자는 회원가입을 하지 않아도 단어 검색서비스를 회원과 동일하게
              이용할 수 있습니다. 이용자가 단어 등록, 수정 요청 서비스를
              이용하기 위해 회원가입을 할 경우, 다오는 서비스 이용을 위해 필요한
              최소한의 개인정보를 수집합니다.
            </p>
            <p className={styles.text}>
              회원가입 시점에 다오가 이용자로부터 수집하는 개인정보는 아래와
              같습니다.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                회원 가입 시 필수항목으로 이메일, 비밀번호를 수집합니다. 실명
                인증된 아이디로 가입 시, 암호화된 동일인 식별정보(CI), 중복가입
                확인정보(DI), 내외국인 정보를 함께 수집합니다.
              </li>
              <li className={styles.listItem}>
                카카오 계정으로 회원가입 시에는 필수항목으로 카카오톡 닉네임을,
                선택항목으로 이메일을 수집합니다.
              </li>
            </ul>
            <p className={styles.text}>
              서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와
              같습니다.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                다오 내의 개별 서비스 이용, 이벤트 응모 및 경품 신청 과정에서
                해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수
                있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집
                시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및
                이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를
                받습니다.
              </li>
              <li className={styles.listItem}>
                서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보,
                위치정보가 생성되어 수집될 수 있습니다.
              </li>
              <li className={styles.listItem}>
                구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된
                방법으로 생성하거나 이용자가 입력한 정보를 저장(수집) 될 수
                있습니다. 이와 같이 수집된 정보는 개인정보와의 연계 여부 등에
                따라 개인정보에 해당할 수 있고, 개인정보에 해당하지 않을 수도
                있습니다.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>수집한 개인정보의 이용</h2>
            <p className={styles.text}>
              다오 서비스의 회원관리 등 아래의 목적으로만 개인정보를 이용합니다.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                회원 가입 의사의 확인, 이용자 식별, 회원탈퇴 의사의 확인 등
                회원관리를 위하여 개인정보를 이용합니다.
              </li>
              <li className={styles.listItem}>
                법령 및 다오 이용약관을 위반하는 회원에 대한 이용 제한 조치,
                부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는
                행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정
                등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등
                이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
              </li>
              <li className={styles.listItem}>
                서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계,
                서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등에
                개인정보를 이용합니다.
              </li>
              <li className={styles.listItem}>
                보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는
                서비스 이용환경 구축을 위해 개인정보를 이용합니다.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>개인정보 보관기간</h2>
            <p className={styles.text}>
              회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이
              파기하고 있습니다.
            </p>
            <p className={styles.text}>
              전자상거래 등에서의 소비자 보호에 관한 법률, 전자문서 및 전자거래
              기본법, 통신비밀보호법 등 법령에서 일정기간 정보의 보관을 규정하는
              경우는 아래와 같습니다. 다오는 이 기간 동안 법령의 규정에 따라
              개인정보를 보관하며, 본 정보를 다른 목적으로는 절대 이용하지
              않습니다.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                계약 또는 청약철회 등에 관한 기록: 5년 보관 (전자상거래 등에서
                소비자 보호에 관한 법률)
              </li>
              <li className={styles.listItem}>
                대금결제 및 재화 등의 공급에 관한 기록: 5년 보관 (전자상거래
                등에서 소비자 보호에 관한 법률)
              </li>
              <li className={styles.listItem}>
                소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관 (전자상거래
                등에서 소비자 보호에 관한 법률)
              </li>
              <li className={styles.listItem}>
                공인전자주소를 통한 전자문서 유통에 관한 기록: 10년 보관
                (전자문서 및 전자거래 기본법)
              </li>
              <li className={styles.listItem}>
                로그인 기록: 3개월 보관 (통신비밀보호법)
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>
              개인정보 수집 및 이용 동의를 거부할 권리
            </h2>
            <p className={styles.text}>
              이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다.
              회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집
              및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
