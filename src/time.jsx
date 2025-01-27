

// import React from 'react';
// import moment from 'moment-timezone';
// import "./time.css"





// class TimezoneList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timezones: [],
//       searchTerm: '',
//     };
//   }

//   componentDidMount() {
//     const timezones = moment.tz.names();
//     this.setState({ timezones });
//     this.interval = setInterval(() => this.forceUpdate(), 1000); // Update every second
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   handleSearchChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
//   };

//   render() {
//     const { timezones, searchTerm } = this.state;
//     const filteredTimezones = timezones.filter((timezone) =>
//       timezone.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//       <div id='body'>
//         <section id='top'>
//         <h1>LIST OF TIMEZONES</h1>
//         <h3>(view worlds all time)</h3>
//         <input
//           type="text"
//           placeholder="Search Timezones"
//           value={searchTerm}
//           onChange={this.handleSearchChange}
//           id='search'
//         />
//         </section>
//         <ul>
//           {filteredTimezones.map((timezone, index) => (
//             <li key={index}>
//               <br/>

//               <strong>{timezone}</strong>
//               <br/>
//               <br/>
//               <span id='date'> {moment().tz(timezone).format('DD/MM/YYYY')}</span>
//                <span id='time'> {moment().tz(timezone).format('h:mm:ss A')}</span>
//             </li>
//           ))}
//         </ul>
//         <section id='footer'>
//         <img src={require('./myimg.jpg')} alt='error' id='myimhg' />
//           <h4 id='myname'>Mohamed Ashi</h4>
//           <p id='sub'>devloper of the page</p>
//         </section>
//       </div> 
//     );
//   }
// }

// export default TimezoneList;

// =========================new time ========================================
// import React, { useState, useEffect } from 'react';

// function TimezoneList() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const timeString = time.toLocaleTimeString();

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.time}>{timeString}</h1>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundColor: 'black',
//         margin: 0,
//     },
//     time: {
//         color: 'white',
//         fontSize: '10vw',
//         fontFamily: 'Arial, sans-serif',
//     },
// };

// export default TimezoneList;





import React, { useState, useEffect } from 'react';

function LiveTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    const dateOptions = {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
          };
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    // const date = time.toLocaleDateString();
        const formattedDate = time.toLocaleDateString(undefined, dateOptions);

    return (
        <div style={styles.container}>
            <h1 style={styles.time}>
                <h6 style={styles.date}>{formattedDate}</h6>
                <span style={styles.hourMinute}>{hours}:{minutes}</span>
                <span style={styles.seconds}>:{seconds}</span>
            </h1>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '97vh',
        backgroundColor: 'black',
          
    },
    time: {
        fontSize: '10vw',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
       
    },
    hourMinute: {
        color: 'white',
    },
    seconds: {
        color: 'red',
    },
    date: {
      color: 'white',
      fontSize: '5vw',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
  },
};

export default LiveTime;




// import React, { useState, useEffect } from 'react';

// function LiveTime() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     // Format time with AM/PM
//     const timeOptions = {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true
//     };

//     const dateOptions = {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     };

//     const formattedTime = time.toLocaleTimeString(undefined, timeOptions);
//     const seconds = time.toLocaleTimeString(undefined, timeOptions);
//     const formattedDate = time.toLocaleDateString(undefined, dateOptions);

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.date}>{formattedDate}</h1>
//             <h1 style={styles.time}>{formattedTime}</h1>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '97.5vh',
//         backgroundColor: 'black',
//         margin: 0,
//     },
//     date: {
//         color: 'white',
//         fontSize: '5vw',
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         marginTop: '1px',
//         marginBottom: '1px',
//         textAlign: 'center',
//     },
//     time: {
//         fontSize: '10vw',
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         textAlign: 'center',
//         color: 'white',
//     }
// };

// export default LiveTime;
