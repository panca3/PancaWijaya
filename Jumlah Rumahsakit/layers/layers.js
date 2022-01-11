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
var format_praktekSIG_0 = new ol.format.GeoJSON();
var features_praktekSIG_0 = format_praktekSIG_0.readFeatures(json_praktekSIG_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_praktekSIG_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_praktekSIG_0.addFeatures(features_praktekSIG_0);var lyr_praktekSIG_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_praktekSIG_0, 
                style: style_praktekSIG_0,
    title: 'praktek SIG<br />\
    <img src="styles/legend/praktekSIG_0_0.png" />  (0.0 - 1.3 ) Sedikit<br />\
    <img src="styles/legend/praktekSIG_0_1.png" />  (1.3 - 2.7 ) Sedang<br />\
    <img src="styles/legend/praktekSIG_0_2.png" />  (2.7 - 4.0 ) Banyak<br />'
        });

lyr_praktekSIG_0.setVisible(true);
var layersList = [baseLayer,lyr_praktekSIG_0];
lyr_praktekSIG_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'Jml_RS': 'Jml_RS', });
lyr_praktekSIG_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Jml_RS': 'TextEdit', });
lyr_praktekSIG_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'Jml_RS': 'inline label', });
lyr_praktekSIG_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});