import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Jaú',
      slug: 'jau',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const anotherPLace = {
      id: '2',
      name: 'Araraquara',
      slug: 'araraquara',
      location: {
        latitude: 256,
        longitude: -12
      }
    }

    render(<Map places={[place, anotherPLace]} />)

    expect(screen.getByTitle(/jaú/i)).toBeInTheDocument()
    expect(screen.getByTitle(/araraquara/i)).toBeInTheDocument()
  })
})
