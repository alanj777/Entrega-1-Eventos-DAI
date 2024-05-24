export class Event {
    constructor(id, name, description, startDate, durationInMinutes, price, enabledForEnrollment, maxAssistance, tags, creatorUser, eventCategory, eventLocation) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.startDate = startDate;
      this.durationInMinutes = durationInMinutes;
      this.price = price;
      this.enabledForEnrollment = enabledForEnrollment;
      this.maxAssistance = maxAssistance;
      this.tags = tags;
      this.creatorUser = creatorUser;
      this.eventCategory = eventCategory;
      this.eventLocation = eventLocation;
    }
  }
