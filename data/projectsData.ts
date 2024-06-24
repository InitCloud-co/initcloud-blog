interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Rocket',
    description: `IaC는 편리한 인프라스트럭처 관리 도구입니다. 다양한 보안위협과 컴플라이언스 준수, 오설정을 사전에 방지해 더 안전한 IaC를 사용해보세요.`,
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH}/static/images/rocket-card.png`,
    href: 'https://www.initcloud.io/service/rocket',
  },
  {
    title: 'IaCDOG',
    description: `IaC를 작성하면서 계획했던 대로 인프라가 배포 되는지 빠른 확인이 필요하신가요? IaCDOG을 통해 가독성 좋은 인프라 구성도를 살펴보실 수 있습니다.`,
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH}/static/images/IaCDOG.png`,
    href: 'https://www.initcloud.io/iacdog',
  },
]

export default projectsData
