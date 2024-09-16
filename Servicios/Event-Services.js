export class eventService {
    getAllEvents() {
      console.log("getAllEvents");
      return [
        {
          id: 1,
          name: "evento1",
          price: 10,
        },
      ];
    }
  }
  
  export class eventService1 {
    getEventByFilter(pageSize, page, nombre, categoria, fechaI, tag) {

      return "funciona2";
    }
  }
  
  export class eventService2 {
    getEventDetail(id) 
    {

    return "funciona3"
    }
  }
  export class eventService3 {
  getListadoParticipantes(){}
  
  
  }
