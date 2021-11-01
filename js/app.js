let url = window.location.href.split('?');
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
          
    initialView: 'Semaine',
    views:{
      Semaine:{
        type: 'timeGrid',
        duration: { days: 3 } 
      }
    }, 
    initialView: url[1] !== 'day'? 'Semaine':'timeGridDay',

      
      slotMinTime:'07:00',
      slotMaxTime:'19:00',
      aspectRatio: 0.3,
      expandRows:true,
      weekends: false,
      locale: 'fr',
      
      // remove monthly view button
      headerToolbar: {
        left: 'prev,next today',
        start: 'title',
        center: '',
        end: 'timeGridWeek,timeGridDay',
        //end: 'Semaine,timeGridDay',

      },
      businessHours: {
        daysOfWeek: [ 1, 2, 3, 4, 5], 
        duration: { days: 5 },
        startTime: '08:00', 
        endTime: '18:00', 
      },
      nowIndicator:true,  
      height: 'auto',    
      events: '../js/event.json',
      eventColor: 'green',   
      eventClick: function(info) {
        url = info.event.title;
        if(url === 'Français') url = 'Francais'
        if(url === 'Année 2021-2022' || url === '1er semester 2021-2022' || url === '1er trimestre 2021-2022' || url === "Vacances d'automne" || url === "Semaine COM 1 2021-2022")
        { url = '#'}
        window.open("classes/"+url+".html",'_self');
      }
    });
    calendar.render();
    
  });

