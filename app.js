
Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "logo": "https://www.ansi.tn/sites/all/themes/adaptivetheme/ansi_theme/logo.png",
    "logoWidth": 600,
    "logoHeight": 100,
    showQuestionNumbers:"off",
    "pages":[
      {
    "questions": [
      {
 "type": "html",
 "name": "question17",
 "html": "<p class=title>Information</p>",
 "startWithNewLine": false,

},
        {

            "name": "Maitre D'ouvrage",
            "type": "text",
            "title": "Maitre D'ouvrage:",
            "placeHolder": "Nom de maitre d'ouvrage",
            "isRequired": true
        },  {
            type: "dropdown",
            name: "Secteur D'activité",
            title: "Secteur D'activité ",
            isRequired: true,
            colCount: 0,
            choices: [
                "Enseignement",
                "Formation",
                "Education",
                "Services",
                "Social/Santé",
                "Energie/Industrie",
                "Finance",
                "Tic",
                "Transport",
                "BTP",
                "Commerce",
                "Agriculture",
            ]
        },

        {
            type: "dropdown",
            name: "Catégorie",
            title: "Catégorie",
            isRequired: true,
            colCount: 0,
            choices: [
                "Ministére",
                "FSI",
                "Entreprise",
                "Banque/Assurance",

            ]
        }, {
            "name": "année",
            "type": "text",
            "inputType": "date",
            "title": "Année:",
            "isRequired": true,
        }



    ]
  },











  {
    "questions": [
      {
 "type": "html",
 "name": "question17",
 "html": "<p class=title>Organisation</p>"
},
                {
                    type: "boolean",
                    name: "Nomination officielle RSSI",
                    title: "Nomination officielle RSSI",
                    "isRequired": true
                  },{
                      type: "boolean",
                      name: "fiche",
                      title: "Fiche de poste RSSI",
                      "isRequired": true
                    },{
                        type: "dropdown",
                        name: "Ratachement",
                        title: "Rattachement RSSI",
                        colCount: 0,
                        choices: [
                            "DG",
                            "DSI",
                            "Direction administrative",
                            "Direction audit interne",
                            "Direction risques",

                        ]
                      },{
                          type: "boolean",
                          name: "Existence officielle cellule securité",
                          title: "Existence officielle cellule securité",
                          "isRequired": true
                        },{
                            type: "boolean",
                            name: "Existence officielle comité securité",
                            title: "Existence officielle comité securité",
                            "isRequired": true                },



                            {
                       "type": "html",
                       "name": "question17",
                       "html": "<p class=title>PSSI</p>"
                      },


                            {
            type: "radiogroup",
            name: "Existance formelle PSSI",
            title: "Existance formelle PSSI",
            isRequired: true,
            choices: [
                "Yes", "No"
            ],
            colCount: 0
        },{
            type: "dropdown",
            name: "Portée",
            title: "Portée",
            visibleIf: "{Existance formelle PSSI}='Yes'",
            "indent": 10,
            isRequired: true,
            choices: ["Partielle", "Totale"]
        },{
            type: "boolean",
            name: "Communication",
            title: "Communication",
            visibleIf: "{Existance formelle PSSI}='Yes'",
            "indent": 10,

            isRequired: true,

        },{
            type: "boolean",
            name: "Maintien de la PSSI",
            title: "Maintien de la PSSI",
            visibleIf: "{Existance formelle PSSI}='Yes'",
            "indent": 10,

            isRequired: true,

        },




        {
   "type": "html",
   "name": "question17",
   "html": "<p class=title>Gestion de la continuité d'activité</p>"
  },

        {
type: "radiogroup",
name: "Existance formelle PCA",
title: "Existance formelle PCA",
isRequired: true,
choices: [
"Yes", "No"
],
colCount: 0
},{
    type: "boolean",
    name: "Existance formelle PRA",
    title: "Existance formelle PRA",
    visibleIf: "{Existance formelle PCA}='Yes'",
    "indent": 10,

    isRequired: true,

},{
    type: "boolean",
    name: "Maintien du PCA",
    title: "Maintien du PCA",
    visibleIf: "{Existance formelle PCA}='Yes'",
    "indent": 10,

    isRequired: true,

},{
    type: "boolean",
    name: "Maintien du PRA",
    title: "Maintien du PRA",
    visibleIf: "{Existance formelle PCA}='Yes'",
    "indent": 10,

    isRequired: true,

},{
    type: "boolean",
    name: "Organisation de crise en cas de sinistre",
    title: "Organisation de crise en cas de sinistre",
    visibleIf: "{Existance formelle PCA}='Yes'",
    "indent": 10,

    isRequired: true,

},{
    type: "boolean",
    name: "Site secours",
    title: "Site secours",
    visibleIf: "{Existance formelle PCA}='Yes'",
    "indent": 10,

    isRequired: true,

},








{
"type": "html",
"name": "question17",
"html": "<p class=title>Gestion des actifs</p>"
},
{
    type: "boolean",
    name: "Inventaire complet",
    title: "Inventaire complet",
    "isRequired": true                },
    {
        type: "boolean",
        name: "Procédure formelle de la classification",
        title: "Procédure formelle de la classification",
        "isRequired": true                },
        {
            type: "boolean",
            name: "Mise en place de la classification ",
            title: "Mise en place de la classification ",
            "isRequired": true                },




            {
       "type": "html",
       "name": "question17",
       "html": "<p class=title>Gestion des risques SI métiers</p>"
      },

            {
type: "radiogroup",
name: "Existance formelle de la gestion des risques",
title: "Existance formelle de la gestion des risques",
isRequired: true,
choices: [
"Yes", "No"
],
colCount: 0
},{
    type: "boolean",
    name: "Couverture totale du metier",
    title: "Couverture totale du metier",
    visibleIf: "{Existance formelle de la gestion des risques}='Yes'",
    "indent": 10,

    isRequired: true,
},{
    type: "boolean",
    name: "Realisée une seule fois",
    title: "Realisée une seule fois",
    visibleIf: "{Existance formelle de la gestion des risques}='Yes'",
    "indent": 10,

    isRequired: true,
},{
    type: "boolean",
    name: "Fréquence realisation periodique",
    title: "Fréquence realisation periodique",
    visibleIf: "{Existance formelle de la gestion des risques}='Yes'",
    "indent": 10,

    isRequired: true,
},{
    type: "boolean",
    name: "En cas de changement majeur",
    title: "En cas de changement majeur",
    visibleIf: "{Existance formelle de la gestion des risques}='Yes'",
    "indent": 10,

    isRequired: true,
},











{
"type": "html",
"name": "question17",
"html": "<p class=title>Gestion des incidents</p>"
},
{
    type: "boolean",
    name: "Procedure formelle des gestion des incidents",
    title: "Procedure formelle des gestion des incidents",
    isRequired: true,
},
{
    type: "boolean",
    name: "Existance d'une cellule de gestion des incidents",
    title: "Existance d'une cellule de gestion des incidents",
    isRequired: true,
},






{
"type": "html",
"name": "question17",
"html": "<p class=title>Gestion des sauvgarde</p>"
},

{
    type: "boolean",
    name: "Politique formelle de sauvegarde",
    title: "Politique formelle de sauvegarde",
    isRequired: true,
},
{
            type: "radiogroup",
            name: "Couverture des données métier",
            title: "Couverture des données métier",
            isRequired: true,
            colCount: 4,
            choices: [
                "Absence",
                "Totale",
                "Partielle",
            ]
        },
        {
                    type: "radiogroup",
                    name: "Couverture des données de serveurs de support",
                    title: "Couverture des données de serveurs de support",
                    isRequired: true,
                    colCount: 4,
                    choices: [
                        "Absence",
                        "Totale",
                        "Partielle",
                    ]
                },{
                            type: "radiogroup",
                            name: "Couverture des données des PCs utilisateurs sensibles",
                            title: "Couverture des données des PCs utilisateurs sensibles",
                            isRequired: true,
                            colCount: 4,
                            choices: [
                                "Absence",
                                "Totale",
                                "Partielle",
                            ]
                        },
                        {
                                    type: "radiogroup",
                                    name: "Couverture des running-config des équipements SEC-RES",
                                    title: "Couverture des running-config des équipements SEC-RES",
                                    isRequired: true,
                                    colCount: 4,
                                    choices: [
                                        "Absence",
                                        "Totale",
                                        "Partielle",
                                    ]
                                },
                                {
                                            type: "radiogroup",
                                            name: "Couverture colonage OS des serveurs ",
                                            title: "Couverture colonage OS des serveurs ",
                                            isRequired: true,
                                            colCount: 4,
                                            choices: [
                                                "Absence",
                                                "Totale",
                                                "Partielle",
                                            ]
                                        },
                                        {
                                                    type: "radiogroup",
                                                    name: "Couverture des codes sources et des parametres de config des applications et des logiciels de base  ",
                                                    title: "Couverture des codes sources et des parametres de config des applications et des logiciels de base",
                                                    isRequired: true,
                                                    colCount: 4,
                                                    choices: [
                                                        "Absence",
                                                        "Totale",
                                                        "Partielle",
                                                    ]
                                                },
                                                {
                                                    type: "boolean",
                                                    name: "Maintien de la pole de sauvegarde",
                                                    title: "Maintien de la pole de sauvegarde",
                                                    isRequired: true,
                                                },
                                                {
                                                    type: "boolean",
                                                    name: "Tests de restauration periodiques",
                                                    title: "Tests de restauration periodiques",
                                                    isRequired: true,
                                                },
                                                {
                                                    type: "boolean",
                                                    name: "Existence des copies à un site distant",
                                                    title: "Existence des copies à un site distant",
                                                    isRequired: true,
                                                },
                                                {
                                                    type: "boolean",
                                                    name: "Politique formelle de controle d'access",
                                                    title: "Politique formelle de controle d'access",
                                                    isRequired: true,
                  },






                  {
             "type": "html",
             "name": "question17",
             "html": "<p class=title>TdB SSI</p>"
            },
                  {
      type: "radiogroup",
      name: "Existance d'un tableau de bord SSI",
      title: "Existance d'un tableau de bord SSI",
      isRequired: true,
      choices: [
      "Yes", "No"
      ],
      colCount: 0
      },{
          type: "boolean",
          name: "Portée: Indicateurs operationels",
          title: "Portée: Indicateurs operationels",
          visibleIf: "{Existance d'un tableau de bord SSI}='Yes'",
          "indent": 10,

          isRequired: true,
      },
      {
          type: "boolean",
          name: "Portée: Indicateurs stratigiques",
          title: "Portée: Indicateurs stratigiques",
          visibleIf: "{Existance d'un tableau de bord SSI}='Yes'",
          "indent": 10,

          isRequired: true,
      },





      {
 "type": "html",
 "name": "question17",
 "html": "<p class=title>Audit interne de la sécurité</p>"
},
      {
      type: "radiogroup",
      name: "Existance de l'audit interne de sécurité",
      title: "Existance de l'audit interne de sécurité",
      isRequired: true,
      choices: [
      "Yes", "No"
      ],
      colCount: 0
      },
      {
            type: "boolean",
            name: "Realisation periodique de l'audit interne",
            title: "Realisation periodique de l'audit interne",
            visibleIf: "{Existance de l'audit interne de sécurité}='Yes'",
            "indent": 10,

            isRequired: true,
        },
        {
              type: "boolean",
              name: "Realisation suite à un incident",
              title: "Realisation suite à un incident",
              visibleIf: "{Existance de l'audit interne de sécurité}='Yes'",
              "indent": 10,

              isRequired: true,
          },
          {
                type: "boolean",
                name: "Realisation suite à la mise en place d'un nouveau systeme ",
                title: "Realisation suite à la mise en place d'un nouveau systeme",
                visibleIf: "{Existance de l'audit interne de sécurité}='Yes'",
                "indent": 10,

                isRequired: true,
            },
            {
                  type: "boolean",
                  name: "Portée: Uniquement aspects techniques",
                  title: "Portée: Uniquement aspects techniques",
                  visibleIf: "{Existance de l'audit interne de sécurité}='Yes'",
                  "indent": 10,

                  isRequired: true,
        },
        {
              type: "boolean",
              name: "Portée; Aspects tech, org et phys",
              title: "Portée; Aspects tech, org et phys",
              visibleIf: "{Existance de l'audit interne de sécurité}='Yes'",
              "indent": 10,

              isRequired: true,
          },







          {
     "type": "html",
     "name": "question17",
     "html": "<div class=title> <p>Démarche de conformité</p></div>"
    },
          {
          type: "radiogroup",
          name: "Existance d'une demarche de configuration",
          title: "Existance d'une demarche de configuration",
          isRequired: true,
          choices: [
          "Yes", "No"
          ],
          colCount: 0
          },
          {
                type: "text",
                name: "Nature ",
                title: "Nature",
                visibleIf: "{Existance d'une demarche de configuration}='Yes'",
                "indent": 10,

                isRequired: true,
                placeHolder: "exemples: ISO 27001, PCI, DSS"
            },

            {
                  type: "radiogroup",
                  name: "Etape",
                  title: "Etape",
                  visibleIf: "{Existance d'une demarche de configuration}='Yes'",
                  "indent": 10,

                  isRequired: true,
                  choices:["Certifié", "Project en cours", "Plannifié" ]
              },













            ]
    },



    {
      "questions":[
        {
   "type": "html",
   "name": "question17",
   "html": "<p class=title>Protection antivirale</p>"
  },
  {
  type: "radiogroup",
  name: "Existence d'une solution antivirale",
  title: "Existence d'une solution antivirale",
  isRequired: true,
  choices: [
  "Yes", "No"
  ],
  colCount: 0
  },
  {
        type: "boolean",
        name: "MAJ périodique de la Sol Antivirale",
        title: "MAJ périodique de la Sol Antivirale",
        visibleIf: "{Existence d'une solution antivirale}='Yes'",
        "indent": 10,

        isRequired: true,
    },
    {
          type: "radiogroup",
          name: "Couverture des serveurs",
          title: "Couverture des serveurs",
          visibleIf: "{Existence d'une solution antivirale}='Yes'",
          "indent": 10,

          isRequired: true,
          choices:["Absence","Partielle","Totale" ]
      },


{
      type: "radiogroup",
      name: "Couverture des PCs",
      title: "Couverture des PCs",
      visibleIf: "{Existence d'une solution antivirale}='Yes'",
      "indent": 10,

      isRequired: true,
      choices:["Absence","Partielle","Totale" ]
  },











  {
"type": "html",
"name": "question17",
"html": "<p class=title>Dépl auto des patchs et correctifs Séc OS</p>"
},
{
type: "radiogroup",
name: "Existence Dép auto patchs&cor Séc OS",
title: "Existence Dép auto patchs&cor Séc OS",
isRequired: true,
choices: [
"Yes", "No"
],
colCount: 0
},
{
      type: "radiogroup",
      name: "Couverture des serveurs",
      title: "Couverture des serveurs",
      visibleIf: "{Existence Dép auto patchs&cor Séc OS}='Yes'",
      "indent": 10,

      isRequired: true,
      choices:["Absence","Partielle","Totale" ]
  },
  {
        type: "radiogroup",
        name: "Couverture des PCs",
        title: "Couverture des PCs",
        visibleIf: "{Existence Dép auto patchs&cor Séc OS}='Yes'",
        "indent": 10,

        isRequired: true,
        choices:["Absence","Partielle","Totale" ]
    },









    {
  "type": "html",
  "name": "question17",
  "html": "<p class=title>Processus MAJ des firmwares Equips Sécurité</p>"
  },
  {
  type: "radiogroup",
  name: "Existence de processus MAJ des firmwares Equips Sécurité",
  title: "Existence de processus MAJ des firmwares Equips Sécurité",
  isRequired: true,
  choices: [
  "Yes", "No"
  ],
  colCount: 0
  },
  {
        type: "radiogroup",
        name: "Couverture ",
        title: "Couverture ",
        visibleIf: "{Existence de processus MAJ des firmwares Equips Sécurité}='Yes'",
        "indent": 10,

        isRequired: true,
        choices:["Absence","Partielle","Totale" ]
    },












    {
  "type": "html",
  "name": "question17",
  "html": "<p class=title>Processus MAJ des firmwares Equips Réseau</p>"
  },
  {
  type: "radiogroup",
  name: "Existence de processus MAJ des firmwares Equips Réseau",
  title: "Existence de processus MAJ des firmwares Equips Réseau",
  isRequired: true,
  choices: [
  "Yes", "No"
  ],
  colCount: 0
  },
  {
        type: "radiogroup",
        name: "Couverture ",
        title: "Couverture ",
        visibleIf: "{Existence de processus MAJ des firmwares Equips Réseau}='Yes'",
        "indent": 10,

        isRequired: true,
        choices:["Absence","Partielle","Totale" ]
    },









    {
  "type": "html",
  "name": "question17",
  "html": "<p class=title>Remplacement des produits dont la date EoL ou EoS expiré </p>"
  },
  {
        type: "radiogroup",
        name: "Remp OS Serveurs EoL EoS ",
        title: "Remp OS Serveurs EoL EoS ",
        isRequired: true,
        choices:["Absence","Planifié","Partiel","Total" ]
    },
    {
          type: "radiogroup",
          name: "Remp OS PCs EoL EoS ",
          title: "Remp OS PCs EoL EoS ",
          isRequired: true,
          choices:["Absence","Planifié","Partiel","Total" ]
      },
      {
            type: "radiogroup",
            name: "Remp Produits Sécurité EoL EoS ",
            title: "Remp Produits Sécurité EoL EoS ",
            isRequired: true,
            choices:["Absence","Planifié","Partiel","Total" ]
        },
        {
              type: "radiogroup",
              name: "Remp Produits Réseau EoL EoS ",
              title: "Remp Produits Réseau EoL EoS ",
              isRequired: true,
              choices:["Absence","Planifié","Partiel","Total" ]
          },










          {
        "type": "html",
        "name": "question17",
        "html": "<p class=title>Contrôle d'accès logique </p>"
        },
          {
                type: "boolean",
                name: "Utilisation Contrôleur de domaines",
                title: "Utilisation Contrôleur de domaines",
                isRequired: true,
            },
            {
                  type: "boolean",
                  name: "Utilisation d'une Solution IAM",
                  title: "Utilisation d'une Solution IAM",
                  isRequired: true,
              },
              {
                    type: "boolean",
                    name: "Utilisation Proxy Accès Internet ",
                    title: "Utilisation Proxy Accès Internet ",
                    isRequired: true,
                },

                {
                      type: "boolean",
                      name: "Matrice de Flux Réseau MFR formelle ",
                      title: "Matrice de Flux Réseau MFR formelle ",
                      isRequired: true,
                  },

                  {
                        type: "boolean",
                        name: "Implémentation  règles de filtr -Equips frontaux- cf MFR",
                        title: "Implémentation  règles de filtr -Equips frontaux- cf MFR",
                        isRequired: true,
                    },

                    {
                          type: "boolean",
                          name: "Implémentation Filtrage inter-VLAN cf MFR",
                          title: "Implémentation Filtrage inter-VLAN cf MFR",
                          isRequired: true,
  },


















      {
    "type": "html",
    "name": "question17",
    "html": "<p class=title>Réseau d’administration </p>"
    },
    {
    type: "radiogroup",
    name: "Existence d'un réseau d'admin",
    title: "Existence d'un réseau d'admin",
    isRequired: true,
    choices: [
    "Yes", "No"
    ],
    colCount: 0
    },

    {
          type: "boolean",
          name: "Isolé du réseau production et Internet",
          title: "Isolé du réseau production et Internet",
          visibleIf: "{Existence d'un réseau d'admin}='Yes'",
          "indent": 10,
isRequired: true,
  },
  {
        type: "boolean",
        name: "Admin qu’à partir des machines de ce réseau ",
        title: "Admin qu’à partir des machines de ce réseau ",
        visibleIf: "{Existence d'un réseau d'admin}='Yes'",
        "indent": 10,
isRequired: true,
},

{
      type: "radiogroup",
      name: "Couverture ",
      title: "Couverture ",
      visibleIf: "{Existence d'un réseau d'admin}='Yes'",
      "indent": 10,

      isRequired: true,
      choices:["Absence","Partielle","Totale" ]
  },








{
      type: "boolean",
      name: "Sép infras dév, test et exploitation",
      title: "Sép infras dév, test et exploitation",
isRequired: true,
},









{
"type": "html",
"name": "question17",
"html": "<p class=title>Sécurité des partages </p>"
},
{
      type: "boolean",
      name: "Désactiv des partages rés sur les serveurs ",
      title: "Désactiv des partages rés sur les serveurs ",
      isRequired: true,
  },

{
      type: "boolean",
      name: "Désactiv des partages rés sur les PCs ",
      title: "Désactiv des partages rés sur les PCs ",
      isRequired: true,  },

      {
            type: "boolean",
            name: "Utilisation des serveurs de fichier ",
            title: "Utilisation des serveurs de fichier ",
            isRequired: true,
    },









          {
        "type": "html",
        "name": "question17",
        "html": "<p class=title>Système de détection/Prévention d’intrusion </p>"
        },
        {
        type: "radiogroup",
        name: "Existence d'un Système de détection et de Prévention d’intrusion ",
        title: "Existence d'un Système de détection et de Prévention d’intrusion",
        isRequired: true,
        choices: [
        "Yes", "No"
        ],
        colCount: 0
    },
    {
          type: "boolean",
          name: "Déf politique de détection et de prévention d’intrusion ",
          title: "Déf politique de détection et de prévention d’intrusion ",
          visibleIf: "{Existence d'un Système de détection et de Prévention d’intrusion}='Yes'",
          "indent": 10,
  isRequired: true,
  },

  {
        type: "boolean",
        name: "Configuration par défaut des alertes",
        title: "Configuration par défaut des alertes",
        visibleIf: "{Existence d'un Système de détection et de Prévention d’intrusion}='Yes'",
        "indent": 10,
isRequired: true,
},
{
      type: "boolean",
      name: "Configuration cf à la politique des IDS/IPS",
      title: "Configuration cf à la politique des IDS/IPS",
      visibleIf: "{Existence d'un Système de détection et de Prévention d’intrusion}='Yes'",
      "indent": 10,
isRequired: true,
},

{
      type: "boolean",
      name: "Processus de suivi des alertes générées",
      title: "Processus de suivi des alertes générées",
      visibleIf: "{Existence d'un Système de détection et de Prévention d’intrusion}='Yes'",
      "indent": 10,
isRequired: true,
},











          {
        "type": "html",
        "name": "question17",
        "html": "<p class=title>Solution SIEM</p>"
        },
        {
        type: "radiogroup",
        name: "Existence d'une Solution SIEM ",
        title: "Existence d'une Solution SIEM",
        isRequired: true,
        choices: [
        "Yes", "No"
        ],
        colCount: 0
    },
    {
          type: "boolean",
          name: "Portée: Serveurs",
          title: "Portée: Serveurs",
          visibleIf: "{Existence d'une Solution SIEM}='Yes'",
          "indent": 10,
  isRequired: true,
  },
  {
        type: "boolean",
        name: "Portée: Equips Séc",
        title: "Portée: Equips Séc",
        visibleIf: "{Existence d'une Solution SIEM}='Yes'",
        "indent": 10,
isRequired: true,
},
{
      type: "boolean",
      name: "Portée: Equips Rés",
      title: "Portée: Equips Rés",
      visibleIf: "{Existence d'une Solution SIEM}='Yes'",
      "indent": 10,
isRequired: true,
},
{
      type: "boolean",
      name: "Synchronisation des horloges",
      title: "Synchronisation des horloges",
      visibleIf: "{Existence d'une Solution SIEM}='Yes'",
      "indent": 10,
isRequired: true,
},














{
"type": "html",
"name": "question17",
"html": "<p class=title>Contrats de maintenance</p>"
},
{
    type: "radiogroup",
    name: "Couverture des Serveurs ",
    title: "Couverture des Serveurs   ",
    isRequired: true,
    choices:["Absence","Partiel","Total" ]
},
{
    type: "radiogroup",
    name: "Couverture des applications métier ",
    title: "Couverture des applications métier ",
    isRequired: true,
    choices:["Absence","Partiel","Total" ]
},
{
    type: "radiogroup",
    name: "Couverture des SGBDs",
    title: "Couverture des SGBDs",
    isRequired: true,
    choices:["Absence","Partiel","Total" ]
},
{
    type: "radiogroup",
    name: "Couverture des équips sécurité ",
    title: "Couverture des équips sécurité ",
    isRequired: true,
    choices:["Absence","Partiel","Total" ]
},
{
    type: "radiogroup",
    name: "Couverture des équips réseau ",
    title: "Couverture des équips réseau",
    isRequired: true,
    choices:["Absence","Partiel","Total" ]
},








      ]


    }

  ]


};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (sender, options) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "NewSurvey1610101436226");
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      xhr.send(JSON.stringify(sender.data));
});
survey.onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
    survey.showProgressBar = 'bottom';

$("#surveyElement").Survey({model: survey});
