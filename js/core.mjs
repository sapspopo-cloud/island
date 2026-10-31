export const STORAGE_KEY='dream-islands-v1:kinmen-language-islands:'+new URL('../',import.meta.url).pathname;
export function grade(questions,answers){const missing=questions.filter(q=>!answers[q.id]).map(q=>q.id);const correct=questions.filter(q=>answers[q.id]===q.answer).length;return {correct,total:questions.length,score:questions.length?Math.round(correct/questions.length*100):0,missing};}
export function reviewQuestions(courses,round=0){return courses.filter(c=>c.quiz.length).map(c=>({...c.quiz[round%c.quiz.length],courseId:c.id,courseName:c.name}));}
export function eligible(ids,state){return ids.length>0&&ids.every(id=>{const c=state.courses?.[id];return c?.read===true&&Number(c.score)>=75;});}
export function loadState(storage){
 const recover=()=>({courses:{},recoveryNotice:'瀏覽器內的學習紀錄損毀或無法讀取，已改以空白紀錄繼續。若有匯出備份，可到中央島匯入恢復。'});
 try{const raw=storage.getItem(STORAGE_KEY);if(raw===null)return {courses:{}};const s=JSON.parse(raw);if(!s||typeof s!=='object'||!s.courses||typeof s.courses!=='object'||Array.isArray(s.courses))return recover();
 for(const c of Object.values(s.courses))if(!c||typeof c!=='object'||typeof c.read!=='boolean'||!Number.isFinite(c.score)||c.score<0||c.score>100)return recover();return s;}catch{return recover();}
}
export function saveState(storage,state){try{storage.setItem(STORAGE_KEY,JSON.stringify(state));return true;}catch{return false;}}
export function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
