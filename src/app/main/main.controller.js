export class MainController {
  constructor($timeout, webDevTec, toastr, TimeResource) {
    'ngInject';
    this.toastr = toastr;
    this.TimeResource = TimeResource;
    this.clocks = [];
    this.onMapClick = this.onMapClick.bind(this)
    this.map = {
      center: {latitude: 45, longitude: -73}, zoom: 8,
      events: {
        click: this.onMapClick
        }
      }
    };


  onMapClick(map, event, originalEventArgs) {
    let e = originalEventArgs[0];
    let lat = e.latLng.lat();
    let lon = e.latLng.lng();
    this.TimeResource.getTimeZone({lat: lat, lng: lon}, (data) => {
      this.clocks.push({timestamp: data.timestamp*1000, zoneName: data.zoneName, gm: data.gmtOffset})
    }, (err) => {this.toastr.error('not yet ready')});
  }

  deleteClock(index){
    this.clocks.splice(index, 1)
  }

}
