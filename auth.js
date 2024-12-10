class Auth {
  constructor() {
    this.finish = this.finish;
    this.getMsisdn = this.getMsisdn;
    this.getCanSendMessage = this.getCanSendMessage;
    this.getLanguage = this.getLanguage;
    this.getSelfJid = this.getSelfJid;
    this.getAllContacts = this.getContacts;
    this.getCountry = this.getCountry;
    this.sendLocation = this.sendLocation;
    this.triggerLocationChanged = this.triggerLocationChanged;
    this.triggerProfileChanged = this.triggerProfileChanged;
    this.triggerPresenceChanged = this.triggerPresenceChanged;
    this.triggerLocationSentResponse = this.triggerLocationSentResponse;
    this.triggerNicknameChanged = this.triggerNicknameChanged;
  }


  finish() {
    return "This API call will close the Ayoba microApp";
  }

  sendLocation() {
    return "Latitude: -26.185357775567436 Longitude: 28.019023561909993";
  }

  getCountry() {
    
    return "ZA";
  }

  getContacts() {
    return "27833241313";
  }

  getMsisdn() {
    return "27833241313";
  }

  getCanSendMessage() {
    return "1";
  }

  getLanguage() {
    return "en";
  }

  getSelfJid() {
    return "65c3kdflfc5c7c3hb30lc7615beda57031p2d2df@dev.ayoba.me";
  }

  triggerLocationChanged(onLocationChanged) {
    setInterval(() => {
      onLocationChanged(
        -26.185357775567436 * Math.random(),
        28.019023561909993 * Math.random()
      );
    }, 2000);
  }

  triggerProfileChanged() {
    onProfileChanged("test name", "https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg");
  }

  triggerPresenceChanged() {
    onPresenceChanged("test presence");
  }

  triggerLocationSentResponse() {
    onLocationSentResponse(1);
  }

  triggerNicknameChanged() {
    onNicknameChanged("test nickname");
  }
}

// Create and expose a global instance of AyobaStub

window.authInstance = function() {
  return new Auth(); // Use `new` to correctly instantiate the class
};
