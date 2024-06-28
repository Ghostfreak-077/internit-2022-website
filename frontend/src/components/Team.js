import React from 'react'
import previous3 from '../assets/images/Home/Previous3.png'
import Cards from './Cards/Cards'

const Team = () => {
  const genobs = [
    {
      position: 'Union Body',
      picture: { previous3 },
      name: 'Jack sparrow1',
      insta: '',
      linkedin: '',
      facebook: ''
    },
    {
      position: 'Orgainser',
      picture: { previous3 },
      name: 'Jack sparrow1',
      insta: '',
      linkedin: '',
      facebook: ''
    },
    {
      position: 'Event Head',
      picture: { previous3 },
      name: 'Jack sparrow1',
      insta: '',
      linkedin: '',
      facebook: ''
    },
    {
      position: 'Marketting Head',
      picture: `${previous3}`,
      name: 'Jack sparrow1',
      insta: '',
      linkedin: '',
      facebook: ''
    },
    {
      position: 'Outreach Head',
      picture: `${previous3}`,
      name: 'Jack sparrow1',
      insta: '',
      linkedin: '',
      facebook: ''
    },
    {
      position: 'Design Head',
      picture: `${previous3}`,
      name: 'Jack sparrow1',
      insta: '',
      linkedin: '',
      facebook: ''
    },
    {
      position: 'Development Head',
      picture: `${previous3}`,
      name: 'Jack sparrow1',
      insta: '',
      linkedin: '',
      facebook: ''
    },
  ]
  return (
    <div>
      <h1 className="title text-center mt-5 mb-3">General Observers</h1>
      <div className="generalobserver d-flex flex-wrap my-5">
        <div className="team-card m-auto">
          <Cards banner="Union Body" img={previous3} pya={false} pyp={false}/>
        </div>
      </div>
      <h1 className="title text-center mt-5 mb-3">Team Heads</h1>
      <div className="team-heads d-flex flex-wrap my-5">
        {genobs.map((element) => {
          return (
            <>
              <Cards banner={element.position} img={previous3} pya={false} name={element.name} />

            </>
          )
        })}
      </div>
    </div>
  )
}

export default Team
