
/* My Kost - main.js : Inisialisasi aplikasi dan sesi Supabase */

(async()=>{
  /* Muat data aplikasi */
  S=await load();

  if(!S){
    S=seed();
    persist();
  }else{
    await loadPhotos();
  }

  S.tpl=S.tpl||TPL;
  syncUnits();

  /* Periksa sesi login Supabase */
  try{
    const {data,error}=await supabaseClient.auth.getSession();

    if(error)throw error;

    if(data.session){
      S.auth={u:'Fadhil'};
      nav();
    }else{
      S.auth=null;
      gate();
    }

  }catch(e){
    console.error('Gagal memeriksa sesi Supabase:',e);
    S.auth=null;
    gate();
  }
})();
