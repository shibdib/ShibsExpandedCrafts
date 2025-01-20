export const AddedCrafts = [
    // Medstation
    // CMS + Med Tools = CMS (Lvl1)
    {
        "_id": "675a0e8dc5a76861100eadaf",
        "areaType": 7,
        "requirements": [
            {
                "areaType": 7,
                "requiredLevel": 1,
                "type": "Area"
            },
            {
                "templateId": "619cc01e0a7c3a1a2731940c",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5d02778e86f774203e7dedbe",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            }
        ],
        "productionTime": 1475,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "5d02778e86f774203e7dedbe",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },
    // Metal Fuel Tank + Metal Cutting Scissors (Tool) = 8x Alum. Splints (Lvl1)
    {
        "_id": "677c7650c7a538c4210d4dc5",
        "areaType": 7,
        "requirements": [
            {
                "areaType": 7,
                "requiredLevel": 1,
                "type": "Area"
            },
            {
                "templateId": "5d40419286f774318526545f",
                "type": "Tool"
            },
            {
                "templateId": "5d1b36a186f7742523398433",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            }
        ],
        "productionTime": 1475,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "5af0454c86f7746bf20992e8",
        "continuous": false,
        "count": 8,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },
    // IFAK + Cheese + Esmarch + Army Bandage = IFAK (LVL2)
    {
        "_id": "675a2f1abb84a45d3ec8be78",
        "areaType": 7,
        "requirements": [
            {
                "templateId": "5e831507ea0a7c419c2f9bd9",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5751a25924597722c463c472",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5755356824597772cb798962",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "590c678286f77426c9660122",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "areaType": 7,
                "requiredLevel": 2,
                "type": "Area"
            }
        ],
        "productionTime": 1800,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "590c678286f77426c9660122",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },
    // AFAK + Car + CAT-T + Army Bandage = AFAK (LVL2)
    {
        "_id": "675a2f32b33253355980a79f",
        "areaType": 7,
        "requirements": [
            {
                "templateId": "5751a25924597722c463c472",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "60098af40accd37ef2175f27",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "590c661e86f7741e566b646a",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "60098ad7c2240c0fe85c570a",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "areaType": 7,
                "requiredLevel": 2,
                "type": "Area"
            }
        ],
        "productionTime": 2700,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "60098ad7c2240c0fe85c570a",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },
    // Goldenstar + Vaseline + Analgin = Goldenstar (LVL3)
    {
        "_id": "675a848e8433ffa821e7b13b",
        "areaType": 7,
        "requirements": [
            {
                "templateId": "544fb37f4bdc2dee738b4567",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5755383e24597772cb798966",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5751a89d24597722aa0e8db0",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "areaType": 7,
                "requiredLevel": 3,
                "type": "Area"
            }
        ],
        "productionTime": 3600,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "5751a89d24597722aa0e8db0",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },

    // Nutrition Unit
    // 2x Large Tushonka + Salt = 2x Tarker (Lvl2)
    {
        "_id": "675a2cfdbb2fafebd9ca4b4f",
        "areaType": 8,
        "requirements": [
            {
                "areaType": 8,
                "requiredLevel": 2,
                "type": "Area"
            },
            {
                "templateId": "57347da92459774491567cf5",
                "count": 2,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "62a09ee4cf4a99369e262453",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            }
        ],
        "productionTime": 5400,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "65815f0e647e3d7246384e14",
        "continuous": false,
        "count": 2,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },
    // 1x MRE ration pack + 1x Army crackers + 1x Insulating tape = 2x Iskra ration pack (Lvl1)
    {
        "_id": "675a2cfdbb2fafebd9ca4b4f",
        "areaType": 8,
        "requirements": [
            {
                "areaType": 8,
                "requiredLevel": 1,
                "type": "Area"
            },
            {
                "templateId": "590c5f0d86f77413997acfab",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5448ff904bdc2d6f028b456e",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5734795124597738002c6176",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            }
        ],
        "productionTime": 4600,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "590c5d4b86f774784e1b9c45",
        "continuous": false,
        "count": 2,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },

    // Lavatory
    // 6x Zibbo + Metal Fuel Tank = Metal Fuel Tank (LVL1)
    {
        "_id": "675a83d4adde473e4851a67e",
        "areaType": 2,
        "requirements": [
            {
                "areaType": 2,
                "requiredLevel": 1,
                "type": "Area"
            },
            {
                "templateId": "56742c2e4bdc2d95058b456d",
                "count": 6,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5d1b36a186f7742523398433",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "59e35cbb86f7741778269d83",
                "type": "Tool"
            }
        ],
        "productionTime": 1600,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "5d1b36a186f7742523398433",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },
    // 4x Zibbo + Expeditionary fuel tank = Expeditionary fuel tank (LVL1)
    {
        "_id": "675b8a8728b5b35bc5f96650",
        "areaType": 2,
        "requirements": [
            {
                "areaType": 2,
                "requiredLevel": 1,
                "type": "Area"
            },
            {
                "templateId": "56742c2e4bdc2d95058b456d",
                "count": 4,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "5d1b371186f774253763a656",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            {
                "templateId": "59e35cbb86f7741778269d83",
                "type": "Tool"
            }
        ],
        "productionTime": 1200,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "5d1b371186f774253763a656",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },

    // 1x VKBO army bag + Sewing kit [Krasavch.] = 1x Ripstop fabric (LVL1)
    {
        "_id": "678e50a5ebb229d04a06d40c",
        "areaType": 2,
        "requirements": [
            {
                "areaType": 2,
                "requiredLevel": 1,
                "type": "Area"
            },
            {
                "templateId": "5ab8ee7786f7742d8f33f0b9",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            
            {
                "templateId": "61bf83814088ec1a363d7097",
                "type": "Tool"
            }
        ],
        "productionTime": 1000,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "5e2af4a786f7746d3f3c3400",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },

    // 1x Transformer Bag + Sewing kit [Krasavch.] = 1x Ripstop fabric (LVL1)
    {
        "_id": "678e51b5ebb229d04a06d40e",
        "areaType": 2,
        "requirements": [
            {
                "areaType": 2,
                "requiredLevel": 1,
                "type": "Area"
            },
            {
                "templateId": "56e33680d2720be2748b4576",
                "count": 1,
                "isFunctional": false,
                "isEncoded": false,
                "type": "Item"
            },
            
            {
                "templateId": "61bf83814088ec1a363d7097",
                "type": "Tool"
            }
        ],
        "productionTime": 1000,
        "needFuelForAllProductionTime": false,
        "locked": false,
        "endProduct": "5e2af4a786f7746d3f3c3400",
        "continuous": false,
        "count": 1,
        "productionLimitCount": 0,
        "isEncoded": false,
        "isCodeProduction": false
    },

];