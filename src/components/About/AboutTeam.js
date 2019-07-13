import React from 'react';

class AboutTeam extends React.Component {
  state = {
    team: [
      {
        id: 1,
        name: "Iner Lofgren",
        title: 'Back End Developer',
        github: '',
        img: '/assets/iner-lofgren.jpg'
      },
      {
        id: 2,
        name: "John O'keffe",
        title: 'Back End Developer',
        github: '',
        img: '/assets/john-okeffe.jpg'
      },
      {
        id: 3,
        name: "Shawn Henry",
        title: 'Front End Developer',
        github: 'https://github.com/shenry45',
        img: '/assets/shawn-henry.jpg'
      },
      {
        id: 4,
        name: "Christian MacDonald",
        title: 'Front End Developer',
        github: '',
        img: '/assets/christian-macdonald.jpg'
      },
      {
        id: 5,
        name: "Ihab Ali",
        title: 'Front End Developer',
        github: '',
        img: '/assets/ihab-ali.jpg'
      },
    ]
  }

  render() {
    return(
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-start">
        {this.state.team.map(mem => {
          return (
            <div key={mem.id} className="col-2 d-flex flex-column justify-content-center">
              <img src={mem.img} alt={mem.name} className="w-100 rounded-circle border border-secondary" />
              <p className="text-center">{mem.name}</p>
              <p className="text-center">{mem.title}</p>
              <p className="text-center"><a href={mem.github}>Github</a></p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default AboutTeam;