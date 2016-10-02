<script type="text/javascript" src="https://rawgit.com/thesonrics/ficheblog/master/locMan.js"></script>
<script type="text/javascript" src="https://rawgit.com/thesonrics/ficheblog/master/localizacion.js"></script>
<script type="text/javascript" src="https://rawgit.com/thesonrics/ficheblog/master/datos_tabla.js"></script>

var myobj = JSON.parse(myJSONObject);
var mylocman = JSON.parse(myJSONLocMan);
var myloc = JSON.parse(myJSONLocalizacion);

var isMobile = 0;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 isMobile = 1;
}
function crearQtips(){
	$('[nid]').each(function () {

		$(this).attr('src', myobj[$(this).attr('nid')].url);
                if (isMobile==0) {
                    $(this).wrap( 
                        $('<a>').attr('href', 'http://treasure-cruise.blogspot.com/p/char.html?id=' + $(this).attr('nid')).attr('target','_blank')
                    );
                }
		$(this).qtip({
			position: {
				my: 'bottom left',
				at: 'top center'
			},
			style: {
				classes: 'qtip-rounded qtip-tipsy'
			},
			hide: {
				fixed: true,
				delay: 300
			},
			content: {
				text: function (event, api) {var html = '<table  id="tablapj"><thead><tr><td colspan="2" class="numero">N&deg;. '+ myobj[$(this).attr('nid')].n +'</td><td colspan="8"></td></tr>';
		
		html += '<tr><td colspan="7" class="nombre">'+ myobj[$(this).attr('nid')].nombre +'.</td><td colspan="3" class="coste">COSTE<br>';
		if (myobj[$(this).attr('nid')].coste > 0){
						html += myobj[$(this).attr('nid')].coste;
		}else{
			html += '&nbsp;';
		}
		html +='</td></tr></thead>';
		
		html += '<tbody id="tablamedia"><tr><td rowspan="3" class="orbe"><img src="';
		
		switch(myobj[$(this).attr('nid')].atributo) {
					case 'STR':
						html +='https://lh3.googleusercontent.com/-u440I8sTvBc/ViAcDzmF0VI/AAAAAAAAA8s/7htfrvSNMGw/s44-Ic42/slotR.png';
						break;
					case 'DEX':
						html +='https://lh3.googleusercontent.com/-yjZbovgi1U0/ViAcEKvKicI/AAAAAAAAA80/K-ldh2cWMZE/s44-Ic42/slotV.png';
						break;
					case 'QCK':
						html +='https://lh3.googleusercontent.com/-f33bE4-BgUw/ViAcEDJKxKI/AAAAAAAAA8w/iaCQxl8sETE/s44-Ic42/slotA.png';
						break;					
					case 'PSY':
						html +='https://lh3.googleusercontent.com/-Fv0-Xwp9roE/ViAcEdnpYyI/AAAAAAAAA84/TN4PSj2--to/s44-Ic42/slotY.png';
						break;
					case 'INT':
						html +='https://lh3.googleusercontent.com/-rjkyLNcsEBE/ViAcEL1d-4I/AAAAAAAAA88/2lbxGyS5nQ4/s44-Ic42/slotM.png';
						break;
					default:
					} 
		
		html += '"/></td><td class="der">LvMax</td><td><div class="informacion">';
		if (myobj[$(this).attr('nid')].maxlvl > 0){
			html += myobj[$(this).attr('nid')].maxlvl;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td><td class="der">ExpMax</td><td colspan="2"><div class="informacion">';
		if (myobj[$(this).attr('nid')].xp > 0){
			html += myobj[$(this).attr('nid')].xp;
		}else{
			html += '&nbsp;';
		}
						
		html +='</div></td><td class="tipo"><img src="';
		switch(myobj[$(this).attr('nid')].tipo) {
			case 'Fighter':
				html +='https://lh3.googleusercontent.com/-d23RQd34rpY/VPd2aIojiUI/AAAAAAAABw0/Ak_RYxXicQE/s24-no/common_typ_icn_1.png"/></td><td class="espaciod izq">FIGHTER</td>';
				break;
			case 'Slasher':
				html +='https://lh4.googleusercontent.com/-hSTLRLVLaOM/VPd2ailWA8I/AAAAAAAABw0/e57b6Bh-z2I/s24-no/common_typ_icn_2.png""/></td><td class="espaciod izq">SLASHER</td>';
				break;
			case 'Striker':
				html +='https://lh3.googleusercontent.com/-7ekkHZ5r1og/VPhTFAFakKI/AAAAAAAABxA/bzXCL91oGQk/s24-no/common_typ_icn_3.png"/></td><td class="espaciod izq">STRIKER</td>';
				break;
			case 'Shooter':
				html +='https://lh5.googleusercontent.com/-AzXyrF3N2to/VPd2a-BmBzI/AAAAAAAABw0/TujeJnt_8Ag/s24-no/common_typ_icn_4.png"/></td><td class="espaciod izq">SHOOTER</td>';
				break;
			case 'Evolver':
				html +='https://lh4.googleusercontent.com/-0n4xj2CMA1g/VPd2be4zpZI/AAAAAAAABw0/NJyMoH4f1Pg/s24-no/common_typ_icn_8.png"/></td><td class="espaciod izq">EVOLVER</td>';
				break;
			case 'Booster':
				html +='https://lh4.googleusercontent.com/-0qT3grWPgyA/VPd2bD009eI/AAAAAAAABw0/TI3IExj15wY/s24-no/common_typ_icn_7.png"/></td><td class="espaciod izq">BOOSTER</td>';
				break;
			case 'Free Spirit':
				html +='https://lh3.googleusercontent.com/-G4V1PoZGmgM/VcZQEvXrw4I/AAAAAAAAAWo/rlUmAn3R6IM/s24-Ic42/Freedom.png"/></td><td class="espaciod izq">FREE SPIRIT</td>';
				break;
			case 'Cerebral':
				html +='https://lh3.googleusercontent.com/-E3KTeQuTK-c/Vfi5nbjPSwI/AAAAAAAAAyI/KKajwhygx4A/s24-Ic42/Know.png"/></td><td class="espaciod izq">CEREBRAL</td>';
				break;
			case 'Powerhouse':
				html +='https://lh3.googleusercontent.com/-5fUH8K8Z2r0/Vh2HGGX3AfI/AAAAAAAAA7Q/faQiX6iAxnM/s24-Ic42/common_typ_icn_8.png"/></td><td class="espaciod izq">POWERHOUSE</td>';
				break;
			case 'Driven':
				html +='https://lh3.googleusercontent.com/-WoI2Zb30CH0/Vln9YoHN3RI/AAAAAAAABc8/Yc8tdHyhl7c/s24-Ic42/common_typ_icn_6.png"/></td><td class="espaciod izq">DRIVEN</td>';
				break;	
			default:
				html +='</td><td class="espaciod izq"></td>';
		}

		html +='</tr><tr><td class="der">HP</td><td><div class="informacion">';
		if (myobj[$(this).attr('nid')].hp > 0){
			html += myobj[$(this).attr('nid')].hp;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td><td class="der">RCV</td><td><div class="informacion">';
						html += myobj[$(this).attr('nid')].rcv;
					
		html +='</div></td><td></td><td class="tipo">';
		switch(myobj[$(this).attr('nid')].tipo2) {
			case 'Fighter':
				html +='<img src="https://lh3.googleusercontent.com/-d23RQd34rpY/VPd2aIojiUI/AAAAAAAABw0/Ak_RYxXicQE/s24-no/common_typ_icn_1.png"/></td><td class="espaciod izq">FIGHTER</td>';
				break;
			case 'Slasher':
				html +='<img src="https://lh4.googleusercontent.com/-hSTLRLVLaOM/VPd2ailWA8I/AAAAAAAABw0/e57b6Bh-z2I/s24-no/common_typ_icn_2.png""/></td><td class="espaciod izq">SLASHER</td>';
				break;
			case 'Striker':
				html +='<img src="https://lh3.googleusercontent.com/-7ekkHZ5r1og/VPhTFAFakKI/AAAAAAAABxA/bzXCL91oGQk/s24-no/common_typ_icn_3.png"/></td><td class="espaciod izq">STRIKER</td>';
				break;
			case 'Shooter':
				html +='<img src="https://lh5.googleusercontent.com/-AzXyrF3N2to/VPd2a-BmBzI/AAAAAAAABw0/TujeJnt_8Ag/s24-no/common_typ_icn_4.png"/></td><td class="espaciod izq">SHOOTER</td>';
				break;
			case 'Evolver':
				html +='<img src="https://lh4.googleusercontent.com/-0n4xj2CMA1g/VPd2be4zpZI/AAAAAAAABw0/NJyMoH4f1Pg/s24-no/common_typ_icn_8.png"/></td><td class="espaciod izq">EVOLVER</td>';
				break;
			case 'Booster':
				html +='<img src="https://lh4.googleusercontent.com/-0qT3grWPgyA/VPd2bD009eI/AAAAAAAABw0/TI3IExj15wY/s24-no/common_typ_icn_7.png"/></td><td class="espaciod izq">BOOSTER</td>';
				break;
			case 'Free Spirit':
				html +='<img src="https://lh3.googleusercontent.com/-G4V1PoZGmgM/VcZQEvXrw4I/AAAAAAAAAWo/rlUmAn3R6IM/s24-Ic42/Freedom.png"/></td><td class="espaciod izq">FREE SPIRIT</td>';
				break;
			case 'Cerebral':
				html +='<img src="https://lh3.googleusercontent.com/-E3KTeQuTK-c/Vfi5nbjPSwI/AAAAAAAAAyI/KKajwhygx4A/s24-Ic42/Know.png"/></td><td class="espaciod izq">CEREBRAL</td>';
				break;
			case 'Powerhouse':
				html +='<img src="https://lh3.googleusercontent.com/-5fUH8K8Z2r0/Vh2HGGX3AfI/AAAAAAAAA7Q/faQiX6iAxnM/s24-Ic42/common_typ_icn_8.png"/></td><td class="espaciod izq">POWERHOUSE</td>';
				break;
			case 'Driven':
				html +='<img src="https://lh3.googleusercontent.com/-WoI2Zb30CH0/Vln9YoHN3RI/AAAAAAAABc8/Yc8tdHyhl7c/s24-Ic42/common_typ_icn_6.png"/></td><td class="espaciod izq">DRIVEN</td>';
				break;	
			default:
				html +='</td><td class="espaciod izq"></td>';
		}
		html +='</tr><tr><td class="der">ATK</td><td><div class="informacion">';
		if (myobj[$(this).attr('nid')].atk > 0){
			html += myobj[$(this).attr('nid')].atk;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td><td class="der">CMB</td><td><div class="informacion">';
		if (myobj[$(this).attr('nid')].cmb > 0){
			html += myobj[$(this).attr('nid')].cmb;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td><td class="der">RAREZA</td><td colspan="2" class="estrella espaciod"><div class="informacion">';
		for (i = 0; i <  myobj[$(this).attr('nid')].estrellas; i++) {
			html += '&#9733;';
		}
		html +='</div></td></tr></tbody>';
		
		html +='<tfoot id="tablabaja"><tr><td class="espacioi espaciot der">SLOTS</td><td colspan="2" class="espaciot huecos"><div class="infot">';
		if (myobj[$(this).attr('nid')].slots> 0){
			for (i = 0; i <  myobj[$(this).attr('nid')].slots; i++) {
				html += '&#9679;';
			}
		}else{
			html += '&nbsp;';
		}
		html +='</div></td><td></td><td class="espaciot der">Lv</td><td class="espaciot"><div class="infot">1</div></td><td class="espaciot der">Turn</td><td class="espaciod espaciot"><div class="infot">';
		if (myobj[$(this).attr('nid')].turn > 0){
			html += myobj[$(this).attr('nid')].turn;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td></tr><tr><td colspan="4"></td><td class="der">Lv</td><td><div class="infot">MAX</div></td><td class="der">Turn</td><td class="espaciod"><div class="infot">';
		if (myobj[$(this).attr('nid')].turnmax> 0){
			html += myobj[$(this).attr('nid')].turnmax;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td></tr><tr><td colspan="8"  class="espaciodi">ESPECIAL</td></tr><tr><td colspan="10"  class="espaciodi"><div class="infofinal espaciodi">';
		if (myobj[$(this).attr('nid')].habilidad != "."){
			html += myobj[$(this).attr('nid')].habilidad;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td></tr><tr><td colspan="10"  class="espaciodi">HABILIDAD DE CAPIT&Aacute;N</td></tr><tr><td colspan="10" class="espaciodi espaciob"><div class="infofinal espaciodi">';
		if (myobj[$(this).attr('nid')].capitan != "."){
			html+= myobj[$(this).attr('nid')].capitan;
		}else{
			html += '&nbsp;';
		}
		html +='</div></td></tr></tfoot>';
		
		html += '</table>';
		
		return html;
				}
			}
		});
	});
}

function borrarQtips(){
    
    $('.qtip').remove();
}

$(document).ready(function () {
     crearQtips();


   $('img[title]').qtip({position: {
    my: 'center right',
    at: 'center left'
   },
   style: {
    classes: 'qtip-rounded qtip-tipsy'
   }});

}); 
