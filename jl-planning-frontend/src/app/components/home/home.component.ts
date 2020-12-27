import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../../shared/data.service";

import { Image } from "tns-core-modules/ui/image";
import * as camera from "nativescript-camera";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;
    image: Image;
    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    takeAPicture() {
        camera.requestPermissions()
            .then(() => {
                camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: true })
                    .then((imageAsset) => {
                        console.log("_______");
                        console.log(imageAsset);
                        console.log("_______");
                        const image = new Image();
                        image.src  = imageAsset;
                        /*fromAsset(imageAsset).then(res => {
                            myImageSource = res;
                            console.log(myImageSource);
                        })*/
                        this._itemService.addPhoto(image);
                        this._itemService.getPhotos().forEach((photo) => console.log("it's src: " , photo.image.src));
                    }).catch((err) => {
                    console.log("Error -> " + err.message);
                });
            })
            .catch((e) => {
                console.log("Error requesting permission");
            });

    }
}
