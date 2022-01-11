var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Medis_0 = new ol.format.GeoJSON();
var features_Medis_0 = format_Medis_0.readFeatures(json_Medis_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medis_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Medis_0.addFeatures(features_Medis_0);var lyr_Medis_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medis_0, 
                style: style_Medis_0,
    title: 'Medis<br />\
    <img src="styles/legend/Medis_0_0.png" />  12 - 351 <br />\
    <img src="styles/legend/Medis_0_1.png" />  351 - 691 <br />\
    <img src="styles/legend/Medis_0_2.png" />  691 - 1030 <br />'
        });

lyr_Medis_0.setVisible(true);
var layersList = [baseLayer,lyr_Medis_0];
lyr_Medis_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'tng_medis': 'tng_medis', });
lyr_Medis_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'tng_medis': 'TextEdit', });
lyr_Medis_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'tng_medis': 'inline label', });
lyr_Medis_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});