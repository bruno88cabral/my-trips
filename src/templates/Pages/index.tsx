import LinkWrapper from 'components/LinkWrapper'
import ContactMe from 'components/ContactMe'
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle'
import { Github } from '@styled-icons/entypo-social/Github'
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import { Instagram } from '@styled-icons/entypo-social/Instagram'

import * as S from './styles'
import Link from 'next/link'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseCircle size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
    <ContactMe />
  </S.Content>
)
export default PageTemplate
