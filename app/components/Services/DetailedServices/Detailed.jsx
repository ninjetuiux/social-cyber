'use client'
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// Functional component for the first paragraph
const FirstParagraph = () => (
<div dir='rtl' className='font-sans text-sm flex-col gap-1 right-0'>
  <h2>
    זה קורה לכולם. אתה מנסה להתחבר לחשבון הפייסבוק/אינסטגרם/טיקטוק שלך, 
    והסיסמה לא עובדת. או גרוע מכך, 
    אתה מגלה שמישהו אחר משתמש בחשבון שלך כדי לפרסם דברים שלא היית חולם לכתוב.
  </h2>
  <br />
  <b>מה לעשות עכשיו?</b><br />
  <p>
    <b>אל תיכנס לפאניקה:</b><br />
    פריצה לחשבון היא אירוע מלחיץ, 
    אבל חשוב לשמור על קור רוח. 
    <br />
    ככל שתפעל מהר יותר ובצורה מושכלת, 
    כך גדלים הסיכויים לשחזר את החשבון שלך בשלום.
    <br />
    <br />
    <b>אל תנסה לשחזר לבד:</b> 
    <br />
    זה אולי נראה מפתה לנסות ולשחזר את החשבון בעצמך,
    אבל פעולות כאלו עלולות להזיק יותר מאשר להועיל.
    <br />
    ניסיונות חוזרים להתחבר עם סיסמה שגויה,
    או שימוש בשאלות אבטחה שכבר נחשפו להאקר,
    <br />
    עלולים להקשות על תהליך השחזור ואף לנעול אותך מחוץ לחשבון לצמיתות.
    <br />
    <br />
    <b>אל תסתמך על &quot;חבר מומחה&quot;:</b>
    <br />
    גם אם יש לך חבר שמבין במחשבים,
    הוא לא בהכרח מומחה לאבטחת מידע ולשחזור חשבונות.
    <br />
    פעולות שגויות,
    כמו שליחת קודי אימות להאקר,
    עלולות לתת לו שליטה מלאה בחשבון ולסבך את המצב עוד יותר.
    <br />
    <br />
    <b>פנה ל-SOCIAL-CYBER מיד:</b>
    <br />
    אנחנו המומחים בשחזור חשבונות. יש לנו את הידע,
    הכלים והניסיון להתמודד עם כל סוגי הפריצות.
    <br />
    ככל שתפנה אלינו מוקדם יותר,
    כך נוכל לפעול במהירות וביעילות כדי להחזיר לך את השליטה על החשבון.
  </p>
  <br />
  <b>למה חשוב לפנות אלינו מיד?</b>
  <br />
  <p>
    <b>מניעת נזק נוסף:</b>
    <br />
    האקרים יכולים להשתמש בחשבון שלך כדי לשלוח הודעות ספאם לחברים שלך, לגנוב מידע אישי ואפילו לבצע הונאות כספיות.
    <br />
    ככל שתקדים לפנות אלינו,
    כך נצליח למזער את הנזק הפוטנציאלי.
    <br />
    <br />
    <b>שחזור מהיר ויעיל:</b>
    <br />
    יש לנו את הידע והכלים המתקדמים ביותר לאיתור האקרים ולשחזור חשבונות.
    <br />
    אנחנו יודעים כיצד לתקשר עם פלטפורמות המדיה החברתית בצורה אפקטיבית ולקדם את התהליך במהירות.
    <br />
    <br />
    <b>הגנה מפני פריצות עתידיות:</b>
    <br />
    לאחר שחזור החשבון,
    נספק לך הדרכה וכלים שיעזרו לך להגן על החשבון שלך מפני פריצות עתידיות.
  </p>
  <p>
    <br />
    <b>למה לא כדאי לנסות לשחזר לבד?</b>
    <br />

    <b>סכנת נעילת החשבון:</b>
    <br />
    פלטפורמות מדיה חברתית משתמשות במנגנוני אבטחה שנועדו לזהות פעילות חשודה.
    <br />
    ניסיונות חוזרים להתחבר עם סיסמה שגויה עלולים לגרום לנעילת החשבון באופן זמני או קבוע.
    <br />
    <br />
    <b>חיזוק ההאקר:</b>
    <br />
    כל פעולה שאתה מבצע בחשבון,
    כמו שינוי סיסמה או אימות דו-שלבי,
    עלולה לשלוח התראות להאקר.
    <br />
    זה נותן לו הזדמנות להגיב ולנקוט בצעדים נוספים כדי לחזק את אחיזתו בחשבון.
    <br />
    <br />
    <b>אובדן ראיות:</b>
    <br />
    כל שינוי שאתה מבצע בחשבון עלול למחוק ראיות חשובות שיעזרו לנו בשחזור החשבון.
    <br />
    <br />
    <b>אל תתנו להאקרים לנצח!</b>
    <br />
  </p>
  <p>
    פריצה לחשבון מדיה חברתית היא חוויה לא נעימה,
    אבל היא לא חייבת להיות סוף העולם.
    צור קשר עם SOCIAL-CYBER מיד,
    ואנחנו נעשה כל שביכולתנו כדי להחזיר לך את השליטה על החשבון שלך.

    זכור: ככל שתפעל מהר יותר, כך גדלים הסיכויים לשחזור מוצלח!
  </p>
</div>

);
const SecondParagraph = () => (
<div dir='rtl' className='font-sans text-sm flex-col gap-1 right-0'>
  <h1 className='text-lg font-bold mb-3'>השבתת חשבון מדיה חברתית יכולה לקרות מכל מיני סיבות:</h1>

  <ul className='m-0 p-0 mb-3 flex-col gap-1'>
    <li><b>פריצה לחשבון:</b>
    <br />
      האקרים משתמשים בחשבונך לפעילות זדונית.</li>
    <li><b>הפרת כללי הקהילה:</b>
    <br />
     פרסום תוכן פוגעני, מטעה או בלתי הולם.</li>
    <li><b>פעילות חשודה:</b>
    <br />
     התחברות ממקומות לא מוכרים או פעולות חריגות אחרות.</li>
    <li><b>דיווחים כוזבים:</b>
    <br />
     משתמשים אחרים מדווחים על חשבונך בטעות או בזדון.</li>
    <li><b>גיל:</b>
    <br />
     חשבונות של קטינים עלולים להיות מושבתים אם הם לא עומדים במדיניות הגיל של הפלטפורמה.</li>
  </ul>

  <h2 className='m-0 text-lg'>מה עושים עכשיו?</h2>

  <ol className='m-0 p-0 mb-3'>
    <li><b>נשום עמוק:</b>
    <br />
     השבתת חשבון היא לא סוף העולם. חשוב לשמור על קור רוח ולפעול בחוכמה.</li>
    <li><b>אל תנסה לפתור את הבעיה לבד:</b>
    <br />
     פנייה ישירה לפלטפורמה או ניסיונות חוזרים להתחבר עלולים להחמיר את המצב ולגרום לנעילה ממושכת יותר של החשבון.</li>
    <li><b>בדיקה ראשונית ללא עלות:</b>
    <br />
     צור קשר עם SOCIAL-CYBER לקבלת ייעוץ ראשוני והערכת סיכויי השחזור – ללא עלות!</li>
    <li><b>שירות מקצועי לשחזור חשבונות:</b>
    <br />
     אם יש סיכוי לשחזר את החשבון, נציע לך את שירותינו המקצועיים בתשלום.</li>
  </ol>

  <h2 className='p-0 text-lg mb-1'>למה SOCIAL-CYBER?</h2>

  <ol>
    <li><b>ניסיון והיכרות מעמיקה:</b>
    <br />
     צוות המומחים שלנו בקיא במדיניות של פלטפורמות שונות ומנוסה בפתרון בעיות השבתה.</li>
    <li><b>תקשורת אפקטיבית:</b>
    <br />
     אנו יודעים כיצד לייצג אותך מול פלטפורמות המדיה החברתית ולהציג את המקרה שלך בצורה הטובה ביותר.</li>
    <li><b>פתרונות מותאמים אישית:</b>
    <br />
     אנו מנתחים כל מקרה לגופו ומספקים פתרונות מותאמים אישית להשבת החשבון שלך.</li>
    <li><b>שירות מהיר ואמין:</b>
    <br />
     אנו פועלים במהירות וביעילות כדי להחזיר לך את הגישה לחשבון שלך בהקדם האפשרי.</li>
  </ol>

  <h2>אל תוותר על החשבון שלך!</h2>
  <p>צור קשר עם SOCIAL-CYBER עוד היום, ונבדוק את האפשרויות העומדות בפניך – ללא עלות!</p>
</div>
);
const ThiredParagraph = () => (
<div dir='rtl' className='font-sans text-sm flex-col gap-1 right-0'>
  <p>השעיית חשבון יכולה להיות חוויה מתסכלת, אבל היא לא בהכרח סוף העולם. בין אם מדובר בפריצה, פעילות חשודה או הפרת כללי הקהילה, יש דרכים להתמודד עם המצב.</p><br />

  <h2 className='text-lg'>למה חשבונות מושעים?</h2><br />
  <p>פלטפורמות מדיה חברתית נוקטות באמצעי זהירות כדי להגן על המשתמשים שלהן. השעיה יכולה להתרחש עקב:</p>
  <ul>
    <li><b>פריצה לחשבון:</b> פעילות חריגה בחשבון שלך שעלולה להעיד על כך שמישהו אחר השתלט עליו.<br /></li>
    <li><b>הפרת כללי הקהילה:</b> פרסום תוכן פוגעני, אלים, מטעה או בלתי הולם.<br /></li>
    <li><b>ספאם או פעילות מסחרית לא מורשית:</b> שליחת הודעות רבות או פרסום תוכן שיווקי בצורה אגרסיבית.<br /></li>
    <li><b>התחזות:</b> יצירת חשבון מזויף או התחזות לאדם אחר.<br /></li>
  </ul><br />

  <h2 className='text-lg'>איך למנוע השעיה?</h2><br />

  <ul>
    <li><b>הגן על החשבון שלך:</b> השתמש בסיסמה חזקה וייחודית, הפעל אימות דו-שלבי והיזהר מקישורים חשודים.<br /></li>
    <li><b>הקפד על כללי הקהילה:</b> קרא והבן את תנאי השימוש של הפלטפורמה והימנע מפרסום תוכן פוגעני או בלתי הולם.<br /></li>
    <li><b>הימנע מפעילות חשודה:</b> אל תבצע פעולות חריגות כמו התחברות ממקומות לא מוכרים או שליחת הודעות רבות בפרק זמן קצר.<br /></li>
  </ul><br />

  <h2 className='text-lg'>חשבונך הושעה? מה עושים עכשיו?</h2><br />

  <ol>
    <li><b>אל תנסה לפתור את הבעיה לבד:</b> פעולות פזיזות עלולות להחמיר את המצב.<br /></li>
    <li><b>בדיקה ראשונית ללא עלות:</b> צור קשר עם SOCIAL-CYBER לקבלת ייעוץ ראשוני והערכת סיכויי השחזור – ללא עלות!<br /></li>
    <li><b>שירות מקצועי לשחזור חשבונות:</b> אם יש סיכוי לשחזר את החשבון, נציע לך את שירותינו המקצועיים בתשלום.<br /></li>
  </ol><br />

  <h2 className='text-lg'>למה SOCIAL-CYBER?</h2><br />

  <ul>
    <li><b>מומחיות:</b> צוות מנוסה בפתרון בעיות השעיה.<br /></li>
    <li><b>תקשורת יעילה:</b> נייצג אותך מול פלטפורמות המדיה.<br /></li>
    <li><b>פתרונות מותאמים אישית:</b> ניתוח מעמיק של כל מקרה.<br /></li>
    <li><b>שירות מהיר ואמין:</b> נעשה הכל כדי להחזיר לך את החשבון במהירות.<br /></li>
  </ul><br />

  <h2>אל תוותר על החשבון שלך!</h2><br />
  <p>צור קשר עם SOCIAL-CYBER עוד היום, ונבדוק את האפשרויות העומדות בפניך – ללא עלות!</p>
</div>

)
const BlobItems = [
  {
    title: 'חשבון המדיה החברתית שלך נפרץ?',
    description: `אל תיכנס לפאניקה! פנו למומחים ב-SOCIAL-CYBER מיד.`,
    paragraph: <FirstParagraph />,
    type: 'html', 
  },
  {
    title: 'חשבון המדיה החברתית שלך הושבת? אל תוותר!',
    description: 'סיטואציות נפוצות להשבתת חשבון:',
    paragraph: <SecondParagraph />,
    type: 'html'
  },
  {
    title: 'חשבון המדיה החברתית שלך הושעה? אל תיכנס ללחץ!',
    description: 'We build',
    paragraph: <ThiredParagraph />,
    type: 'html'
  },
]

export default function Detailed() {
  const paragraphRefs = useRef({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth <= 768);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setIsSmallScreen(window.innerWidth <= 768);
      };
      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial values
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useLayoutEffect(() => {
    const paragraphs = paragraphRefs.current;
    Object.keys(paragraphs).forEach((index) => {
      gsap.set(paragraphs[index], { opacity: 0, y: 100 });
    });
    handleTitleClick(0); // animate the first one by default
  }, [windowWidth]);

  const handleTitleClick = (index, e) => {
    if (e) e.preventDefault()
    const paragraphs = paragraphRefs.current;
    Object.keys(paragraphs).forEach((key) => {
      if (key !== index.toString()) {
        gsap.to(paragraphs[key], {
          duration: 0.5,
          opacity: 0,
          y: 100,
          ease: 'power2.inOut',
          height: 0,
          visibility: 'hidden'
        });
      }
    });
    const paragraph = paragraphRefs.current[index];
    gsap.to(paragraph, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: 'power2.inOut',
      height: 'auto',
      visibility: 'visible'
    });
    setActiveIndex(index);
  };

  return (
    <div id='q&a' className="max-x-max min-h-content bg-[#01273a] p-5 font-sans">
      <div className="relative rounded-lg p-1 ring-2 w-full flex flex-grow bg-[#01273a]">
        {
          windowWidth > 768 ? 

            <div className='lg:flex-[0.7] flex-1 flex text-white right-0'>
            {BlobItems.map((item, index) => (
              <div key={index} 
              className={`${activeIndex === index? 'flex right-0' : 'hidden'} flex-grow text-right top-0 px-5 flex justify-end py-2 relative`}
              >
              <div
                ref={(el) => (paragraphRefs.current[index] = el)}
                style={{
                  // position: 'absolute',
                  opacity: activeIndex === index? 1 : 0,
                  marginTop: 0,
                  transform: `translateY(${activeIndex === index? 0 : 100}px)`,
                  right: 0,
                }}
                className=""
              >
                {item.paragraph}
              </div>
              </div>
            ))}
          </div>:<></>
        }

        <div className="lg:border-l-2 text-white text-end border-[#d5e9f4] lg:flex-[0.3] min-w-[300px]">
          <div className=''>
            {BlobItems.map((item, index) => (
              <div key={index} className={`flex flex-col flex-shrink-0 lg:gap-0 gap-2 whitespace-wrap p-3 font-sans min-h-[70px]  shadow-sm rounded-lg lg:m-3 ${activeIndex === index? ' text-[#01273a]' : ''}`}>
                <div className="rounded-md w-full" onClick={(e) => handleTitleClick(index, e)}>
                  <div className={`${activeIndex === index ? 'bg-[#C3FA42]' : ''} rounded-lg p-5 cursor-pointer`}>  
                      <h1 dir='rtl' className="text-md font-bold text-right">{item.title}</h1>
                      <p dir='rtl' className="text-sm text-right">{item.description}</p>
                    {/* add paragraph here on small screens same as above just the text will expand it self under each title section */}
                    {
                      !isSmallScreen ? <></> : 

                    <div dir='rtl' className={isSmallScreen ? 'flex flex-col flex-shrink-0 text-right' : 'hidden'}>
                      <div
                        dir='rtl'
                        ref={(el) => (paragraphRefs.current[index] = el)}
                        style={{
                          opacity: activeIndex === index? 1 : 0,
                          display: activeIndex === index? 'flex' : 'hidden',
                          transform: `translateY(${activeIndex === index? 0 : 100}px)`,
                          y: 100,
                        }}
                        className={isSmallScreen ? 'py-2 lg:py-0 bg-white rounded-lg p-3 mt-2' : 'hidden'}
                      >
                        {item.paragraph}
                      </div>  
                    </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}