// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {otherData} from '../mocks/otherData.mock';
export const environment = {
  production: false,
    operation: {
      loading: {
        getAll: {
          categorie: 'Récupération de tous les categories en cours...',
          produit: 'Récupération de les produit en cours...',
          answer: 'Récupération de toutes les réponses en cours...',
          profil: 'Récupération de tous les profil en cours'
        },
        get: {
          image: 'Téléchargement de l\'image en cours...',
          categorie: 'Récupération d\'un categorie en cours...',
          produit: 'Récupération d\'une produit en cours...',
          answer: 'Récupération d\'une réponse en cours...',
          profil: 'Récupération du profil en cours...'
        },
        update: {
          categorie: '⏳ Modification du categorie en cours...',
          produit: '⏳ Modification de la produit en cours...',
          answer: '⏳Modification de la réponse en cours...',
          profil: 'Modification du profil en cours'
        },
        delete:  {
          categorie: '⏳ Suppression du categorie en cours...',
          produit: '⏳ Suppression de la produit en cours...',
          answer: '⏳ Suppression de la réponse en cours...',
          profil: '⏳ Suppression du profil en cours...'
        },
        post: {
          categorie: '⏳ Enregistrement du categorie en cours...',
          produit: '⏳ Enregistrement de la produit en cours...',
          answer: '⏳ Enregistrement de la réponse en cours...',
          profil: '⏳ Enregistrement du profil en cours...'
        }},
      succeeded: {
        getAll: {
          categorie: 'Récupération des categories terminé!',
          produit: 'Récupération des produit terminé!',
          answer: 'Récupération des réponses terminé!'
        },
        get: {
          categorie: 'Récupération du categorie éffectuée avec succès!',
          produit: 'Récupération de la produit éffectuée avec succès!',
          answer: 'Récupération de la réponse éffectuée avec succès!',
          profil: 'Récupération du profil éffectuée avec succès!',
          image: '✅ Image téléchargée avec succès!'
        },
        update: {
          categorie: '✅ Modification du categorie éffectuée avec succès!',
          produit: '✅ Modification de la produit éffectuée avec succès!',
          answer: '✅ Modification de la réponse éffectuée avec succès!',
          profil: '✅ Modification du profil éffectuée avec succès!'
        },
        delete:  {
          categorie: '✅ Suppression du categorie éffectuée avec succès!',
          produit: '✅ Suppression de la produit éffectuée avec succès!',
          answer: '✅ Suppression de la réponse éffectuée avec succès!',
          profil: '✅ Suppression du profil éffectuée avec succès!'
        },
        post: {
          categorie: '✅ Enregistrement du categorie éffectué avec succès!',
          produit: '✅ Enregistrement de la produit éffectuée avec succès!',
          answer: '✅ Enregistrement de la réponse éffectuée avec succès!',
          profil: '✅ Enregistrement du profil éffectué avec succès!'
        }

      }
    }
  ,
  url: 'https://cocomeek-backend.herokuapp.com/api',
    imagesUrl: 'https://cocomeek-backend.herokuapp.com/images',
    fontsUrl: 'https://cocomeek-backend.herokuapp.com/fonts',
  formFieldRequired: 'ce champs est requis',
  formPriceRequired: 'le prix est requis',
  formCategoryRequired: 'la categorie est requise',
  appName: 'GNS',
  maintenanceMessage: 'ce service sera très bientôt disponible',
    socketUrl: "https://cocomeek-backend.herokuapp.com"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 *


  /*snackInformation: {
    informationForAll: {
      duration: snackData.duration,
      horizontalPosition:  snackData.horizontalPosition,
      verticalPosition: snackData.verticalPosition,
      panelClass: [snackData.info.class]
    },
    successForAll: {
      duration: snackData.duration,
      horizontalPosition:  snackData.horizontalPosition,
      verticalPosition: snackData.verticalPosition,
      panelClass: [snackData.succes.class]
    },
    errorForAll: {
      duration:  snackData.duration,
      horizontalPosition:  snackData.horizontalPosition,
      verticalPosition: snackData.verticalPosition,
      panelClass: [snackData.error.class]
    },
    loadingUpdate: {
      horizontalPosition:  snackData.horizontalPosition,
      verticalPosition: snackData.verticalPosition,
      panelClass: [snackData.update.class]

    },
    loadingPost: {
      horizontalPosition:  snackData.horizontalPosition,
      verticalPosition: snackData.verticalPosition,
      panelClass: [snackData.succes.class]

    },
    loadingDelete: {
      horizontalPosition:  snackData.horizontalPosition,
      verticalPosition: snackData.verticalPosition,
      panelClass: [snackData.delete.class]

    },
    loadingGet: {
      horizontalPosition:  snackData.horizontalPosition,
      verticalPosition: snackData.verticalPosition,
      panelClass: [snackData.get.class]

    },
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
