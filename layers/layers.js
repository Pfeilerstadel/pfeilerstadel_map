var wms_layers = [];


        var lyr_Pfeilerstadel_0 = new ol.layer.Tile({
            'title': 'Pfeilerstadel',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.mapbox.com/styles/v1/pfeilerstadel/cmiq3yca6001o01s89yo49dqv/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGZlaWxlcnN0YWRlbCIsImEiOiJjbWlvejBpbncwNm5oM2ZzY200ZTZ4c29lIn0.hVxPTZA4AVeoH24pDFkz4A'
            })
        });
var format_Pfeilerstadel_1 = new ol.format.GeoJSON();
var features_Pfeilerstadel_1 = format_Pfeilerstadel_1.readFeatures(json_Pfeilerstadel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pfeilerstadel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pfeilerstadel_1.addFeatures(features_Pfeilerstadel_1);
var lyr_Pfeilerstadel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pfeilerstadel_1, 
                style: style_Pfeilerstadel_1,
                interactive: false,
                title: '<img src="styles/legend/Pfeilerstadel_1.png" /> Pfeilerstadel'
            });
var format_Hofstellen_Kaernten_2 = new ol.format.GeoJSON();
var features_Hofstellen_Kaernten_2 = format_Hofstellen_Kaernten_2.readFeatures(json_Hofstellen_Kaernten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hofstellen_Kaernten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hofstellen_Kaernten_2.addFeatures(features_Hofstellen_Kaernten_2);
var lyr_Hofstellen_Kaernten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hofstellen_Kaernten_2,
maxResolution:280.0446615226196,
 
                style: style_Hofstellen_Kaernten_2,
                interactive: false,
                title: '<img src="styles/legend/Hofstellen_Kaernten_2.png" /> Hofstellen_Kaernten'
            });
var format_Einhof_3 = new ol.format.GeoJSON();
var features_Einhof_3 = format_Einhof_3.readFeatures(json_Einhof_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Einhof_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Einhof_3.addFeatures(features_Einhof_3);
var lyr_Einhof_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Einhof_3, 
                style: style_Einhof_3,
                interactive: true,
                title: '<img src="styles/legend/Einhof_3.png" /> Einhof'
            });
var format_Haufenhof_4 = new ol.format.GeoJSON();
var features_Haufenhof_4 = format_Haufenhof_4.readFeatures(json_Haufenhof_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haufenhof_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haufenhof_4.addFeatures(features_Haufenhof_4);
var lyr_Haufenhof_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haufenhof_4, 
                style: style_Haufenhof_4,
                interactive: true,
                title: '<img src="styles/legend/Haufenhof_4.png" /> Haufenhof'
            });
var format_Paarhof_5 = new ol.format.GeoJSON();
var features_Paarhof_5 = format_Paarhof_5.readFeatures(json_Paarhof_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paarhof_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paarhof_5.addFeatures(features_Paarhof_5);
var lyr_Paarhof_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paarhof_5, 
                style: style_Paarhof_5,
                interactive: true,
                title: '<img src="styles/legend/Paarhof_5.png" /> Paarhof'
            });
var format_Ringhof_6 = new ol.format.GeoJSON();
var features_Ringhof_6 = format_Ringhof_6.readFeatures(json_Ringhof_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ringhof_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ringhof_6.addFeatures(features_Ringhof_6);
var lyr_Ringhof_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ringhof_6, 
                style: style_Ringhof_6,
                interactive: true,
                title: '<img src="styles/legend/Ringhof_6.png" /> Ringhof'
            });
var format_Solitr_7 = new ol.format.GeoJSON();
var features_Solitr_7 = format_Solitr_7.readFeatures(json_Solitr_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solitr_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solitr_7.addFeatures(features_Solitr_7);
var lyr_Solitr_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solitr_7, 
                style: style_Solitr_7,
                interactive: true,
                title: '<img src="styles/legend/Solitr_7.png" /> Solitär'
            });
var format_Streuhof_8 = new ol.format.GeoJSON();
var features_Streuhof_8 = format_Streuhof_8.readFeatures(json_Streuhof_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streuhof_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streuhof_8.addFeatures(features_Streuhof_8);
var lyr_Streuhof_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streuhof_8, 
                style: style_Streuhof_8,
                interactive: true,
                title: '<img src="styles/legend/Streuhof_8.png" /> Streuhof'
            });
var format_Nichtnachvollziehbar_9 = new ol.format.GeoJSON();
var features_Nichtnachvollziehbar_9 = format_Nichtnachvollziehbar_9.readFeatures(json_Nichtnachvollziehbar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nichtnachvollziehbar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nichtnachvollziehbar_9.addFeatures(features_Nichtnachvollziehbar_9);
var lyr_Nichtnachvollziehbar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nichtnachvollziehbar_9, 
                style: style_Nichtnachvollziehbar_9,
                interactive: true,
                title: '<img src="styles/legend/Nichtnachvollziehbar_9.png" /> Nicht nachvollziehbar'
            });
var format_LandwirtschaftlicheNutzung_10 = new ol.format.GeoJSON();
var features_LandwirtschaftlicheNutzung_10 = format_LandwirtschaftlicheNutzung_10.readFeatures(json_LandwirtschaftlicheNutzung_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandwirtschaftlicheNutzung_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandwirtschaftlicheNutzung_10.addFeatures(features_LandwirtschaftlicheNutzung_10);
var lyr_LandwirtschaftlicheNutzung_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandwirtschaftlicheNutzung_10, 
                style: style_LandwirtschaftlicheNutzung_10,
                interactive: true,
                title: '<img src="styles/legend/LandwirtschaftlicheNutzung_10.png" /> Landwirtschaftliche Nutzung'
            });
var format_Leerstand_11 = new ol.format.GeoJSON();
var features_Leerstand_11 = format_Leerstand_11.readFeatures(json_Leerstand_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Leerstand_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leerstand_11.addFeatures(features_Leerstand_11);
var lyr_Leerstand_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Leerstand_11, 
                style: style_Leerstand_11,
                interactive: true,
                title: '<img src="styles/legend/Leerstand_11.png" /> Leerstand'
            });
var format_Verfallen_12 = new ol.format.GeoJSON();
var features_Verfallen_12 = format_Verfallen_12.readFeatures(json_Verfallen_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verfallen_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verfallen_12.addFeatures(features_Verfallen_12);
var lyr_Verfallen_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verfallen_12, 
                style: style_Verfallen_12,
                interactive: true,
                title: '<img src="styles/legend/Verfallen_12.png" /> Verfallen'
            });
var format_Abgerissen_13 = new ol.format.GeoJSON();
var features_Abgerissen_13 = format_Abgerissen_13.readFeatures(json_Abgerissen_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abgerissen_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abgerissen_13.addFeatures(features_Abgerissen_13);
var lyr_Abgerissen_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abgerissen_13, 
                style: style_Abgerissen_13,
                interactive: true,
                title: '<img src="styles/legend/Abgerissen_13.png" /> Abgerissen'
            });
var format_AlternativeNutzung_14 = new ol.format.GeoJSON();
var features_AlternativeNutzung_14 = format_AlternativeNutzung_14.readFeatures(json_AlternativeNutzung_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlternativeNutzung_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlternativeNutzung_14.addFeatures(features_AlternativeNutzung_14);
var lyr_AlternativeNutzung_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlternativeNutzung_14, 
                style: style_AlternativeNutzung_14,
                interactive: true,
                title: '<img src="styles/legend/AlternativeNutzung_14.png" /> Alternative Nutzung'
            });
var format_AllePfeilerstadel_15 = new ol.format.GeoJSON();
var features_AllePfeilerstadel_15 = format_AllePfeilerstadel_15.readFeatures(json_AllePfeilerstadel_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllePfeilerstadel_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllePfeilerstadel_15.addFeatures(features_AllePfeilerstadel_15);
var lyr_AllePfeilerstadel_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllePfeilerstadel_15, 
                style: style_AllePfeilerstadel_15,
                interactive: true,
                title: '<img src="styles/legend/AllePfeilerstadel_15.png" /> Alle Pfeilerstadel'
            });
var group_AllePfeilerstadel = new ol.layer.Group({
                                layers: [lyr_AllePfeilerstadel_15,],
                                fold: 'open',
                                title: 'Alle Pfeilerstadel'});
var group_AktuelleNutzung = new ol.layer.Group({
                                layers: [lyr_Nichtnachvollziehbar_9,lyr_LandwirtschaftlicheNutzung_10,lyr_Leerstand_11,lyr_Verfallen_12,lyr_Abgerissen_13,lyr_AlternativeNutzung_14,],
                                fold: 'close',
                                title: 'Aktuelle Nutzung'});
var group_Hofformen = new ol.layer.Group({
                                layers: [lyr_Einhof_3,lyr_Haufenhof_4,lyr_Paarhof_5,lyr_Ringhof_6,lyr_Solitr_7,lyr_Streuhof_8,],
                                fold: 'close',
                                title: 'Hofformen'});
var group_Hofstellen = new ol.layer.Group({
                                layers: [lyr_Hofstellen_Kaernten_2,],
                                fold: 'close',
                                title: 'Hofstellen'});
var group_Bebauung = new ol.layer.Group({
                                layers: [lyr_Pfeilerstadel_1,],
                                fold: 'close',
                                title: 'Bebauung'});
var group_Basiskarten = new ol.layer.Group({
                                layers: [lyr_Pfeilerstadel_0,],
                                fold: 'close',
                                title: 'Basiskarten'});

lyr_Pfeilerstadel_0.setVisible(true);lyr_Pfeilerstadel_1.setVisible(false);lyr_Hofstellen_Kaernten_2.setVisible(false);lyr_Einhof_3.setVisible(false);lyr_Haufenhof_4.setVisible(false);lyr_Paarhof_5.setVisible(false);lyr_Ringhof_6.setVisible(false);lyr_Solitr_7.setVisible(false);lyr_Streuhof_8.setVisible(false);lyr_Nichtnachvollziehbar_9.setVisible(false);lyr_LandwirtschaftlicheNutzung_10.setVisible(false);lyr_Leerstand_11.setVisible(false);lyr_Verfallen_12.setVisible(false);lyr_Abgerissen_13.setVisible(false);lyr_AlternativeNutzung_14.setVisible(false);lyr_AllePfeilerstadel_15.setVisible(true);
var layersList = [group_Basiskarten,group_Bebauung,group_Hofstellen,group_Hofformen,group_AktuelleNutzung,group_AllePfeilerstadel];
lyr_Pfeilerstadel_1.set('fieldAliases', {'fid': 'fid', 'KG': 'KG', 'NS': 'NS', 'NS_RECHT': 'NS_RECHT', 'layer': 'layer', 'path': 'path', 'Grundfläche': 'Grundfläche', });
lyr_Hofstellen_Kaernten_2.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'WIDCODE': 'WIDCODE', 'BESCHEID': 'BESCHEID', 'UMWIDMUNG': 'UMWIDMUNG', 'DATENERST': 'DATENERST', 'VON': 'VON', 'BIS': 'BIS', 'AENDERUNGD': 'AENDERUNGD', 'GEMNR': 'GEMNR', 'AENDERUNGN': 'AENDERUNGN', 'KATEGORIE': 'KATEGORIE', 'WIDMUNG': 'WIDMUNG', 'ZUSAETZLIC': 'ZUSAETZLIC', 'NAEHERE_BE': 'NAEHERE_BE', 'BEZEICHNUN': 'BEZEICHNUN', 'KURZBEZEIC': 'KURZBEZEIC', 'CODE': 'CODE', 'WID_KEY': 'WID_KEY', 'WID_TYP_PK': 'WID_TYP_PK', 'WID_TYP__1': 'WID_TYP__1', 'URL': 'URL', 'LAST_EXPOR': 'LAST_EXPOR', });
lyr_Einhof_3.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe [m]', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Haufenhof_4.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe [m]', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Paarhof_5.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Ringhof_6.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Solitr_7.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Streuhof_8.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Nichtnachvollziehbar_9.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_LandwirtschaftlicheNutzung_10.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Leerstand_11.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Verfallen_12.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_Abgerissen_13.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_AlternativeNutzung_14.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Beschriftung_Name': 'Beschriftung_Name', 'Beschriftung_Zeitstempel': 'Beschriftung_Zeitstempel', 'Beschriftung_Breitengrad': 'Beschriftung_Breitengrad', 'Beschriftung_Längengrad': 'Beschriftung_Längengrad', 'Beschriftung_Höhe': 'Seehöhe', 'Beschriftung_Blickrichtung': 'Beschriftung_Blickrichtung', 'Beschriftung_Kurs': 'Beschriftung_Kurs', 'Beschriftung_Ortsdetail': 'Beschriftung_Ortsdetail', 'Beschriftung_Stadt': 'Beschriftung_Stadt', 'Beschriftung_Provinz / Staat': 'Beschriftung_Provinz / Staat', 'Beschriftung_Land': 'Beschriftung_Land', 'Beschriftung_Beschreibung': 'Aktuelle Nutzung', 'Beschriftung_Schlagwörter': 'Beschriftung_Schlagwörter', 'Beschriftung_Foto-URL': 'Beschriftung_Foto-URL', 'Beschriftung_Urheber': 'Foto', 'Beschriftung_Copyright': 'Hofform', });
lyr_AllePfeilerstadel_15.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'photo_html': 'photo_html', 'CSV_Inhalte_verknüpft_Name': 'CSV_Inhalte_verknüpft_Name', 'CSV_Inhalte_verknüpft_Zeitstempel': 'CSV_Inhalte_verknüpft_Zeitstempel', 'CSV_Inhalte_verknüpft_Breitengrad': 'CSV_Inhalte_verknüpft_Breitengrad', 'CSV_Inhalte_verknüpft_Längengrad': 'CSV_Inhalte_verknüpft_Längengrad', 'CSV_Inhalte_verknüpft_Höhe': 'Seehöhe [m]', 'CSV_Inhalte_verknüpft_Blickrichtung': 'CSV_Inhalte_verknüpft_Blickrichtung', 'CSV_Inhalte_verknüpft_Kurs': 'CSV_Inhalte_verknüpft_Kurs', 'CSV_Inhalte_verknüpft_Ortsdetail': 'CSV_Inhalte_verknüpft_Ortsdetail', 'CSV_Inhalte_verknüpft_Stadt': 'CSV_Inhalte_verknüpft_Stadt', 'CSV_Inhalte_verknüpft_Provinz / Staat': 'CSV_Inhalte_verknüpft_Provinz / Staat', 'CSV_Inhalte_verknüpft_Land': 'CSV_Inhalte_verknüpft_Land', 'CSV_Inhalte_verknüpft_Beschreibung': 'Aktuelle Nutzung', 'CSV_Inhalte_verknüpft_Schlagwörter': 'CSV_Inhalte_verknüpft_Schlagwörter', 'CSV_Inhalte_verknüpft_Foto-URL': 'CSV_Inhalte_verknüpft_Foto-URL', 'CSV_Inhalte_verknüpft_Urheber': 'Foto', 'CSV_Inhalte_verknüpft_Copyright': 'Hofform', });
lyr_Pfeilerstadel_1.set('fieldImages', {'fid': 'TextEdit', 'KG': 'TextEdit', 'NS': 'Range', 'NS_RECHT': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'Grundfläche': 'TextEdit', });
lyr_Hofstellen_Kaernten_2.set('fieldImages', {'id': 'TextEdit', 'OBJECTID': 'TextEdit', 'WIDCODE': 'TextEdit', 'BESCHEID': 'TextEdit', 'UMWIDMUNG': 'TextEdit', 'DATENERST': 'TextEdit', 'VON': 'TextEdit', 'BIS': 'TextEdit', 'AENDERUNGD': 'TextEdit', 'GEMNR': 'TextEdit', 'AENDERUNGN': 'TextEdit', 'KATEGORIE': 'TextEdit', 'WIDMUNG': 'TextEdit', 'ZUSAETZLIC': 'TextEdit', 'NAEHERE_BE': 'TextEdit', 'BEZEICHNUN': 'TextEdit', 'KURZBEZEIC': 'TextEdit', 'CODE': 'TextEdit', 'WID_KEY': 'TextEdit', 'WID_TYP_PK': 'TextEdit', 'WID_TYP__1': 'TextEdit', 'URL': 'TextEdit', 'LAST_EXPOR': 'DateTime', });
lyr_Einhof_3.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Haufenhof_4.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Paarhof_5.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Ringhof_6.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Solitr_7.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Streuhof_8.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Nichtnachvollziehbar_9.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_LandwirtschaftlicheNutzung_10.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Leerstand_11.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Verfallen_12.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_Abgerissen_13.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_AlternativeNutzung_14.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'Beschriftung_Name': 'TextEdit', 'Beschriftung_Zeitstempel': 'DateTime', 'Beschriftung_Breitengrad': 'TextEdit', 'Beschriftung_Längengrad': 'TextEdit', 'Beschriftung_Höhe': 'TextEdit', 'Beschriftung_Blickrichtung': 'TextEdit', 'Beschriftung_Kurs': 'TextEdit', 'Beschriftung_Ortsdetail': 'TextEdit', 'Beschriftung_Stadt': 'TextEdit', 'Beschriftung_Provinz / Staat': 'TextEdit', 'Beschriftung_Land': 'TextEdit', 'Beschriftung_Beschreibung': 'TextEdit', 'Beschriftung_Schlagwörter': 'TextEdit', 'Beschriftung_Foto-URL': 'TextEdit', 'Beschriftung_Urheber': 'TextEdit', 'Beschriftung_Copyright': 'TextEdit', });
lyr_AllePfeilerstadel_15.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'photo_html': '', 'CSV_Inhalte_verknüpft_Name': 'TextEdit', 'CSV_Inhalte_verknüpft_Zeitstempel': 'DateTime', 'CSV_Inhalte_verknüpft_Breitengrad': 'TextEdit', 'CSV_Inhalte_verknüpft_Längengrad': 'TextEdit', 'CSV_Inhalte_verknüpft_Höhe': 'TextEdit', 'CSV_Inhalte_verknüpft_Blickrichtung': 'TextEdit', 'CSV_Inhalte_verknüpft_Kurs': 'TextEdit', 'CSV_Inhalte_verknüpft_Ortsdetail': 'TextEdit', 'CSV_Inhalte_verknüpft_Stadt': 'TextEdit', 'CSV_Inhalte_verknüpft_Provinz / Staat': 'TextEdit', 'CSV_Inhalte_verknüpft_Land': 'TextEdit', 'CSV_Inhalte_verknüpft_Beschreibung': 'TextEdit', 'CSV_Inhalte_verknüpft_Schlagwörter': 'TextEdit', 'CSV_Inhalte_verknüpft_Foto-URL': 'TextEdit', 'CSV_Inhalte_verknüpft_Urheber': 'TextEdit', 'CSV_Inhalte_verknüpft_Copyright': 'TextEdit', });
lyr_Pfeilerstadel_1.set('fieldLabels', {'fid': 'hidden field', 'KG': 'hidden field', 'NS': 'hidden field', 'NS_RECHT': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Grundfläche': 'hidden field', });
lyr_Hofstellen_Kaernten_2.set('fieldLabels', {'id': 'hidden field', 'OBJECTID': 'hidden field', 'WIDCODE': 'hidden field', 'BESCHEID': 'hidden field', 'UMWIDMUNG': 'hidden field', 'DATENERST': 'hidden field', 'VON': 'hidden field', 'BIS': 'hidden field', 'AENDERUNGD': 'hidden field', 'GEMNR': 'hidden field', 'AENDERUNGN': 'hidden field', 'KATEGORIE': 'hidden field', 'WIDMUNG': 'hidden field', 'ZUSAETZLIC': 'hidden field', 'NAEHERE_BE': 'hidden field', 'BEZEICHNUN': 'hidden field', 'KURZBEZEIC': 'hidden field', 'CODE': 'hidden field', 'WID_KEY': 'hidden field', 'WID_TYP_PK': 'hidden field', 'WID_TYP__1': 'hidden field', 'URL': 'hidden field', 'LAST_EXPOR': 'hidden field', });
lyr_Einhof_3.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Haufenhof_4.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'hidden field', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Paarhof_5.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Ringhof_6.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Solitr_7.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Streuhof_8.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Nichtnachvollziehbar_9.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_LandwirtschaftlicheNutzung_10.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Leerstand_11.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Verfallen_12.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_Abgerissen_13.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_AlternativeNutzung_14.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'Beschriftung_Name': 'hidden field', 'Beschriftung_Zeitstempel': 'hidden field', 'Beschriftung_Breitengrad': 'hidden field', 'Beschriftung_Längengrad': 'hidden field', 'Beschriftung_Höhe': 'hidden field', 'Beschriftung_Blickrichtung': 'hidden field', 'Beschriftung_Kurs': 'hidden field', 'Beschriftung_Ortsdetail': 'no label', 'Beschriftung_Stadt': 'hidden field', 'Beschriftung_Provinz / Staat': 'hidden field', 'Beschriftung_Land': 'hidden field', 'Beschriftung_Beschreibung': 'inline label - visible with data', 'Beschriftung_Schlagwörter': 'hidden field', 'Beschriftung_Foto-URL': 'hidden field', 'Beschriftung_Urheber': 'inline label - visible with data', 'Beschriftung_Copyright': 'inline label - visible with data', });
lyr_AllePfeilerstadel_15.set('fieldLabels', {'fid': 'hidden field', 'photo': 'hidden field', 'filename': 'hidden field', 'directory': 'hidden field', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', 'photo_html': 'no label', 'CSV_Inhalte_verknüpft_Name': 'hidden field', 'CSV_Inhalte_verknüpft_Zeitstempel': 'hidden field', 'CSV_Inhalte_verknüpft_Breitengrad': 'hidden field', 'CSV_Inhalte_verknüpft_Längengrad': 'hidden field', 'CSV_Inhalte_verknüpft_Höhe': 'hidden field', 'CSV_Inhalte_verknüpft_Blickrichtung': 'hidden field', 'CSV_Inhalte_verknüpft_Kurs': 'hidden field', 'CSV_Inhalte_verknüpft_Ortsdetail': 'no label', 'CSV_Inhalte_verknüpft_Stadt': 'hidden field', 'CSV_Inhalte_verknüpft_Provinz / Staat': 'hidden field', 'CSV_Inhalte_verknüpft_Land': 'hidden field', 'CSV_Inhalte_verknüpft_Beschreibung': 'inline label - visible with data', 'CSV_Inhalte_verknüpft_Schlagwörter': 'hidden field', 'CSV_Inhalte_verknüpft_Foto-URL': 'hidden field', 'CSV_Inhalte_verknüpft_Urheber': 'inline label - always visible', 'CSV_Inhalte_verknüpft_Copyright': 'inline label - visible with data', });
lyr_AllePfeilerstadel_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});