import { Github } from '@styled-icons/entypo-social/Github'
import { Instagram } from '@styled-icons/entypo-social/Instagram'
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import Link from 'next/link'
import * as S from './styles'

const ContactMe = () => {
  return (
    <S.Wrapper>
      <S.Grid>
        <Link href="https://github.com/bruno88cabral" passHref>
          <a target="_blank">
            <Github size={32} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/devbrunocabral/" passHref>
          <a target="_blank">
            <LinkedinWithCircle size={32} />
          </a>
        </Link>
        <Link href="https://www.Instagram.com/brunocabral88/" passHref>
          <a target="_blank">
            <Instagram size={32} />
          </a>
        </Link>
      </S.Grid>
    </S.Wrapper>
  )
}

export default ContactMe
