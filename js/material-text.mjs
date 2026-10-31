
export const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Only local source PNG references are interpreted; raw HTML is always escaped.
export function renderMaterialText(text){
 const pattern=/!\[([^\]]*)\]\((assets\/source\/page-\d{3}\.png)\)/g;let result='',at=0;
 for(const m of String(text).matchAll(pattern)){result+='<p>'+escapeHtml(text.slice(at,m.index))+'</p><figure class="source-page"><a href="'+m[2]+'" target="_blank" rel="noopener noreferrer" aria-label="放大'+escapeHtml(m[1])+'"><img src="'+m[2]+'" alt="'+escapeHtml(m[1])+'" loading="lazy" width="647" height="885"></a><figcaption>'+escapeHtml(m[1])+' · 點圖放大</figcaption></figure>';at=m.index+m[0].length;}
 return result+'<p>'+escapeHtml(String(text).slice(at))+'</p>';
}
