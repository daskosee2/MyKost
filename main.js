
/* My Kost - main.js : Inisialisasi aplikasi dan sesi Supabase */

(async()=>{
  try{
    /* Periksa sesi login Supabase */
    const {data,error}=await supabaseClient.auth.getSession();

    if(error)throw error;

    if(data.session){
      S=await load();

      /* Akun baru menggunakan data kosong */
      if(!S){
        S={
          demo:false,
          units:[],
          tenants:[],
          payments:[],
          tx:[],
          maint:[],
          tpl:TPL
        };

        persist();

      }else{
        await loadPhotos();
      }

      S.tpl=S.tpl||TPL;
      syncUnits();
      S.auth={u:'Fadhil'};

      nav();

    }else{
      S=null;
      gate();
    }

  }catch(e){
    console.error('Gagal menginisialisasi aplikasi:',e);
    S=null;
    gate();
  }
})();
