window.onload = function(){
    getCorona();
}

function getCorona(){
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        let unionCases = data.data.summary.total;
        let unionDeths = data.data.summary.deaths;
        let unionRec = data.data.summary.discharged;
        //
        let s1l = data.data.regional[0].loc;
        let s1c = data.data.regional[0].totalConfirmed;
        let s1d = data.data.regional[0].deaths;
        let s1r = data.data.regional[0].discharged;
        //
        //
        let s2l = data.data.regional[1].loc;
        let s2c = data.data.regional[1].totalConfirmed;
        let s2d = data.data.regional[1].deaths;
        let s2r = data.data.regional[1].discharged;
        //
        //
        let s3l = data.data.regional[2].loc;
        let s3c = data.data.regional[2].totalConfirmed;
        let s3d = data.data.regional[2].deaths;
        let s3r = data.data.regional[2].discharged;
        //
        //
        let s4l = data.data.regional[3].loc;
        let s4c = data.data.regional[3].totalConfirmed;
        let s4d = data.data.regional[3].deaths;
        let s4r = data.data.regional[3].discharged;
        //
        //
        let s5l = data.data.regional[4].loc;
        let s5c = data.data.regional[4].totalConfirmed;
        let s5d = data.data.regional[4].deaths;
        let s5r = data.data.regional[4].discharged;
        //
        //
        let s6l = data.data.regional[5].loc;
        let s6c = data.data.regional[5].totalConfirmed;
        let s6d = data.data.regional[5].deaths;
        let s6r = data.data.regional[5].discharged;
        //
        //
        let s7l = data.data.regional[6].loc;
        let s7c = data.data.regional[6].totalConfirmed;
        let s7d = data.data.regional[6].deaths;
        let s7r = data.data.regional[6].discharged;
        //
        //
        let s8l = data.data.regional[7].loc;
        let s8c = data.data.regional[7].totalConfirmed;
        let s8d = data.data.regional[7].deaths;
        let s8r = data.data.regional[7].discharged;
        //
        //
        let s9l = data.data.regional[8].loc;
        let s9c = data.data.regional[8].totalConfirmed;
        let s9d = data.data.regional[8].deaths;
        let s9r = data.data.regional[8].discharged;
        //
        //
        let s10l = data.data.regional[9].loc;
        let s10c = data.data.regional[9].totalConfirmed;
        let s10d = data.data.regional[9].deaths;
        let s10r = data.data.regional[9].discharged;
        //
        //
        let s11l = data.data.regional[10].loc;
        let s11c = data.data.regional[10].totalConfirmed;
        let s11d = data.data.regional[10].deaths;
        let s11r = data.data.regional[10].discharged;
        //
        //
        let s12l = data.data.regional[11].loc;
        let s12c = data.data.regional[11].totalConfirmed;
        let s12d = data.data.regional[11].deaths;
        let s12r = data.data.regional[11].discharged;
        //
        //
        let s13l = data.data.regional[12].loc;
        let s13c = data.data.regional[12].totalConfirmed;
        let s13d = data.data.regional[12].deaths;
        let s13r = data.data.regional[12].discharged;
        //
        //
        let s14l = data.data.regional[13].loc;
        let s14c = data.data.regional[13].totalConfirmed;
        let s14d = data.data.regional[13].deaths;
        let s14r = data.data.regional[13].discharged;
        //
        //
        let s15l = data.data.regional[14].loc;
        let s15c = data.data.regional[14].totalConfirmed;
        let s15d = data.data.regional[14].deaths;
        let s15r = data.data.regional[14].discharged;
        //
        //
        let s16l = data.data.regional[15].loc;
        let s16c = data.data.regional[15].totalConfirmed;
        let s16d = data.data.regional[15].deaths;
        let s16r = data.data.regional[15].discharged;
        //
        //
        let s17l = data.data.regional[16].loc;
        let s17c = data.data.regional[16].totalConfirmed;
        let s17d = data.data.regional[16].deaths;
        let s17r = data.data.regional[16].discharged;
        //
        //
        let s18l = data.data.regional[17].loc;
        let s18c = data.data.regional[17].totalConfirmed;
        let s18d = data.data.regional[17].deaths;
        let s18r = data.data.regional[17].discharged;
        //
        //
        let s19l = data.data.regional[18].loc;
        let s19c = data.data.regional[18].totalConfirmed;
        let s19d = data.data.regional[18].deaths;
        let s19r = data.data.regional[18].discharged;
        //
        //
        let s20l = data.data.regional[19].loc;
        let s20c = data.data.regional[19].totalConfirmed;
        let s20d = data.data.regional[19].deaths;
        let s20r = data.data.regional[19].discharged;
        //
        //
        let s21l = data.data.regional[20].loc;
        let s21c = data.data.regional[20].totalConfirmed;
        let s21d = data.data.regional[20].deaths;
        let s21r = data.data.regional[20].discharged;
        //
        //
        let s22l = data.data.regional[21].loc;
        let s22c = data.data.regional[21].totalConfirmed;
        let s22d = data.data.regional[21].deaths;
        let s22r = data.data.regional[21].discharged;
        //
        //
        let s23l = data.data.regional[22].loc;
        let s23c = data.data.regional[22].totalConfirmed;
        let s23d = data.data.regional[22].deaths;
        let s23r = data.data.regional[22].discharged;
        //
        //
        let s24l = data.data.regional[23].loc;
        let s24c = data.data.regional[23].totalConfirmed;
        let s24d = data.data.regional[23].deaths;
        let s24r = data.data.regional[23].discharged;
        //
        //
        let s25l = data.data.regional[24].loc;
        let s25c = data.data.regional[24].totalConfirmed;
        let s25d = data.data.regional[24].deaths;
        let s25r = data.data.regional[24].discharged;
        //
        //
        let s26l = data.data.regional[25].loc;
        let s26c = data.data.regional[25].totalConfirmed;
        let s26d = data.data.regional[25].deaths;
        let s26r = data.data.regional[25].discharged;
        //
        //
        let s27l = data.data.regional[26].loc;
        let s27c = data.data.regional[26].totalConfirmed;
        let s27d = data.data.regional[26].deaths;
        let s27r = data.data.regional[26].discharged;
        //
        //
        let s28l = data.data.regional[27].loc;
        let s28c = data.data.regional[27].totalConfirmed;
        let s28d = data.data.regional[27].deaths;
        let s28r = data.data.regional[27].discharged;
        //
        //
        let s29l = data.data.regional[28].loc;
        let s29c = data.data.regional[28].totalConfirmed;
        let s29d = data.data.regional[28].deaths;
        let s29r = data.data.regional[28].discharged;
        //
        //
        let s30l = data.data.regional[29].loc;
        let s30c = data.data.regional[29].totalConfirmed;
        let s30d = data.data.regional[29].deaths;
        let s30r = data.data.regional[29].discharged;
        //
        //
        let s31l = data.data.regional[30].loc;
        let s31c = data.data.regional[30].totalConfirmed;
        let s31d = data.data.regional[30].deaths;
        let s31r = data.data.regional[30].discharged;
        //

	   document.getElementById("unionAct").innerHTML = unionCases - (unionDeths + unionRec);

        document.getElementById("unionCases").innerHTML=unionCases.toLocaleString("en");
        document.getElementById("unionDeths").innerHTML=unionDeths.toLocaleString("en");
        document.getElementById("unionRec").innerHTML=unionRec.toLocaleString("en");

        
        //
        document.getElementById("s1l").innerHTML=s1l.toLocaleString("en");
        document.getElementById("s1c").innerHTML=s1c.toLocaleString("en");
        document.getElementById("s1d").innerHTML=s1d.toLocaleString("en");
        document.getElementById("s1r").innerHTML=s1r.toLocaleString("en");
        //
        //
        document.getElementById("s2l").innerHTML=s2l.toLocaleString("en");
        document.getElementById("s2c").innerHTML=s2c.toLocaleString("en");
        document.getElementById("s2d").innerHTML=s2d.toLocaleString("en");
        document.getElementById("s2r").innerHTML=s2r.toLocaleString("en");
        //
        //
        document.getElementById("s3l").innerHTML=s3l.toLocaleString("en");
        document.getElementById("s3c").innerHTML=s3c.toLocaleString("en");
        document.getElementById("s3d").innerHTML=s3d.toLocaleString("en");
        document.getElementById("s3r").innerHTML=s3r.toLocaleString("en");
        //
        document.getElementById("s4l").innerHTML=s4l.toLocaleString("en");
        document.getElementById("s4c").innerHTML=s4c.toLocaleString("en");
        document.getElementById("s4d").innerHTML=s4d.toLocaleString("en");
        document.getElementById("s4r").innerHTML=s4r.toLocaleString("en");
        //
        //
        document.getElementById("s5l").innerHTML=s5l.toLocaleString("en");
        document.getElementById("s5c").innerHTML=s5c.toLocaleString("en");
        document.getElementById("s5d").innerHTML=s5d.toLocaleString("en");
        document.getElementById("s5r").innerHTML=s5r.toLocaleString("en");
        //
        //
        document.getElementById("s6l").innerHTML=s6l.toLocaleString("en");
        document.getElementById("s6c").innerHTML=s6c.toLocaleString("en");
        document.getElementById("s6d").innerHTML=s6d.toLocaleString("en");
        document.getElementById("s6r").innerHTML=s6r.toLocaleString("en");
        //
        //
        document.getElementById("s7l").innerHTML=s7l.toLocaleString("en");
        document.getElementById("s7c").innerHTML=s7c.toLocaleString("en");
        document.getElementById("s7d").innerHTML=s7d.toLocaleString("en");
        document.getElementById("s7r").innerHTML=s7r.toLocaleString("en");
        //
        //
        document.getElementById("s8l").innerHTML=s8l.toLocaleString("en");
        document.getElementById("s8c").innerHTML=s8c.toLocaleString("en");
        document.getElementById("s8d").innerHTML=s8d.toLocaleString("en");
        document.getElementById("s8r").innerHTML=s8r.toLocaleString("en");
        //
        //
        document.getElementById("s9l").innerHTML=s9l.toLocaleString("en");
        document.getElementById("s9c").innerHTML=s9c.toLocaleString("en");
        document.getElementById("s9d").innerHTML=s9d.toLocaleString("en");
        document.getElementById("s9r").innerHTML=s9r.toLocaleString("en");
        //
        //
        document.getElementById("s10l").innerHTML=s10l.toLocaleString("en");
        document.getElementById("s10c").innerHTML=s10c.toLocaleString("en");
        document.getElementById("s10d").innerHTML=s10d.toLocaleString("en");
        document.getElementById("s10r").innerHTML=s10r.toLocaleString("en");
        //
        //
        document.getElementById("s11l").innerHTML=s11l.toLocaleString("en");
        document.getElementById("s11c").innerHTML=s11c.toLocaleString("en");
        document.getElementById("s11d").innerHTML=s11d.toLocaleString("en");
        document.getElementById("s11r").innerHTML=s11r.toLocaleString("en");
        //
        //
        document.getElementById("s12l").innerHTML=s12l.toLocaleString("en");
        document.getElementById("s12c").innerHTML=s12c.toLocaleString("en");
        document.getElementById("s12d").innerHTML=s12d.toLocaleString("en");
        document.getElementById("s12r").innerHTML=s12r.toLocaleString("en");
        //
        //
        document.getElementById("s13l").innerHTML=s13l.toLocaleString("en");
        document.getElementById("s13c").innerHTML=s13c.toLocaleString("en");
        document.getElementById("s13d").innerHTML=s13d.toLocaleString("en");
        document.getElementById("s13r").innerHTML=s13r.toLocaleString("en");
        //
        //
        document.getElementById("s14l").innerHTML=s14l.toLocaleString("en");
        document.getElementById("s14c").innerHTML=s14c.toLocaleString("en");
        document.getElementById("s14d").innerHTML=s14d.toLocaleString("en");
        document.getElementById("s14r").innerHTML=s14r.toLocaleString("en");
        //
        //
        document.getElementById("s15l").innerHTML=s15l.toLocaleString("en");
        document.getElementById("s15c").innerHTML=s15c.toLocaleString("en");
        document.getElementById("s15d").innerHTML=s15d.toLocaleString("en");
        document.getElementById("s15r").innerHTML=s15r.toLocaleString("en");
        //
        //
        document.getElementById("s16l").innerHTML=s16l.toLocaleString("en");
        document.getElementById("s16c").innerHTML=s16c.toLocaleString("en");
        document.getElementById("s16d").innerHTML=s16d.toLocaleString("en");
        document.getElementById("s16r").innerHTML=s16r.toLocaleString("en");
        //
        //
        document.getElementById("s17l").innerHTML=s17l.toLocaleString("en");
        document.getElementById("s17c").innerHTML=s17c.toLocaleString("en");
        document.getElementById("s17d").innerHTML=s17d.toLocaleString("en");
        document.getElementById("s17r").innerHTML=s17r.toLocaleString("en");
        //
        //
        document.getElementById("s18l").innerHTML=s18l.toLocaleString("en");
        document.getElementById("s18c").innerHTML=s18c.toLocaleString("en");
        document.getElementById("s18d").innerHTML=s18d.toLocaleString("en");
        document.getElementById("s18r").innerHTML=s18r.toLocaleString("en");
        //
        //
        document.getElementById("s19l").innerHTML=s19l.toLocaleString("en");
        document.getElementById("s19c").innerHTML=s19c.toLocaleString("en");
        document.getElementById("s19d").innerHTML=s19d.toLocaleString("en");
        document.getElementById("s19r").innerHTML=s19r.toLocaleString("en");
        //
        //
        document.getElementById("s20l").innerHTML=s20l.toLocaleString("en");
        document.getElementById("s20c").innerHTML=s20c.toLocaleString("en");
        document.getElementById("s20d").innerHTML=s20d.toLocaleString("en");
        document.getElementById("s20r").innerHTML=s20r.toLocaleString("en");
        //
        //
        document.getElementById("s21l").innerHTML=s21l.toLocaleString("en");
        document.getElementById("s21c").innerHTML=s21c.toLocaleString("en");
        document.getElementById("s21d").innerHTML=s21d.toLocaleString("en");
        document.getElementById("s21r").innerHTML=s21r.toLocaleString("en");
        //
        //
        document.getElementById("s22l").innerHTML=s22l.toLocaleString("en");
        document.getElementById("s22c").innerHTML=s22c.toLocaleString("en");
        document.getElementById("s22d").innerHTML=s22d.toLocaleString("en");
        document.getElementById("s22r").innerHTML=s22r.toLocaleString("en");
        //
        //
        document.getElementById("s23l").innerHTML=s23l.toLocaleString("en");
        document.getElementById("s23c").innerHTML=s23c.toLocaleString("en");
        document.getElementById("s23d").innerHTML=s23d.toLocaleString("en");
        document.getElementById("s23r").innerHTML=s23r.toLocaleString("en");
        //
        //
        document.getElementById("s24l").innerHTML=s24l.toLocaleString("en");
        document.getElementById("s24c").innerHTML=s24c.toLocaleString("en");
        document.getElementById("s24d").innerHTML=s24d.toLocaleString("en");
        document.getElementById("s24r").innerHTML=s24r.toLocaleString("en");
        //
        //
        document.getElementById("s25l").innerHTML=s25l.toLocaleString("en");
        document.getElementById("s25c").innerHTML=s25c.toLocaleString("en");
        document.getElementById("s25d").innerHTML=s25d.toLocaleString("en");
        document.getElementById("s25r").innerHTML=s25r.toLocaleString("en");
        //
        //
        document.getElementById("s26l").innerHTML=s26l.toLocaleString("en");
        document.getElementById("s26c").innerHTML=s26c.toLocaleString("en");
        document.getElementById("s26d").innerHTML=s26d.toLocaleString("en");
        document.getElementById("s26r").innerHTML=s26r.toLocaleString("en");
        //
        //
        document.getElementById("s27l").innerHTML=s27l.toLocaleString("en");
        document.getElementById("s27c").innerHTML=s27c.toLocaleString("en");
        document.getElementById("s27d").innerHTML=s27d.toLocaleString("en");
        document.getElementById("s27r").innerHTML=s27r.toLocaleString("en");
        //
        //
        document.getElementById("s28l").innerHTML=s28l.toLocaleString("en");
        document.getElementById("s28c").innerHTML=s28c.toLocaleString("en");
        document.getElementById("s28d").innerHTML=s28d.toLocaleString("en");
        document.getElementById("s28r").innerHTML=s28r.toLocaleString("en");
        //
        //
        document.getElementById("s29l").innerHTML=s29l.toLocaleString("en");
        document.getElementById("s29c").innerHTML=s29c.toLocaleString("en");
        document.getElementById("s29d").innerHTML=s29d.toLocaleString("en");
        document.getElementById("s29r").innerHTML=s29r.toLocaleString("en");
        //
        //
        document.getElementById("s30l").innerHTML=s30l.toLocaleString("en");
        document.getElementById("s30c").innerHTML=s30c.toLocaleString("en");
        document.getElementById("s30d").innerHTML=s30d.toLocaleString("en");
        document.getElementById("s30r").innerHTML=s30r.toLocaleString("en");
        //
        //
        document.getElementById("s31l").innerHTML=s31l.toLocaleString("en");
        document.getElementById("s31c").innerHTML=s31c.toLocaleString("en");
        document.getElementById("s31d").innerHTML=s31d.toLocaleString("en");
        document.getElementById("s31r").innerHTML=s31r.toLocaleString("en");
        //
    })
    .catch(function(){
        console.log("error");
    })
    setTimeout(getCorona, 43200000)
}