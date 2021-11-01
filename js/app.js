document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
     
/*   initialView: 'Semaine',
      views:{
        Semaine:{
          type: 'timeGrid',
          duration: { days: 3 } 
        }
      },    */ 
      
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
      height: 'auto',    
      events: '../js/event.json',
      eventColor: 'green',   
      eventClick: function(info) {
        url = info.event.title;
        if(url === 'Français') url = 'Francais'
        window.open(url+".html",'_self');
      }
    });
    calendar.render();
  });

