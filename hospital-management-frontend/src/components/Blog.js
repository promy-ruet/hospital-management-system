import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Cancer Diet",
    description: "Foods to Add & Avoid During Cancer Treatment",
    image: "/Cancer.jpg",
    fullContent:
     `
      <h2>5 DIET TIPS FOR CANCER PATIENTS</h2>
      
      <p>It's no secret that food plays an important role in our health, and this is especially true for cancer patients. Cancer has been linked to many different factors including genetics, lifestyle choices, environment, and other factors; however, it is also been proven that proper diet helps in cancer treatment. A recommended diet does not cure the disease but aids greatly in providing the body with the necessary nutrition during the treatment. So, here are 5 cancer diet tips from Meditrust Hospital for you to learn more about cancer diets.</p>
      
      <h3>Start eating a nutrition-rich diet before treatment</h3>
      <p>Getting the right nutrition is important for fighting cancer and staying healthy. Cancer patients must begin their diet before treatment to help their body stay nutrition-rich and strong during the treatment. They should increase their nuts, protein, fruits, vegetable intake before treatment in order to keep up with the nutritional demands of their body. This will also help them feel better and have more energy during treatments.</p>
      
      <h3>Adapt diet changes</h3>
      <p>Cancer patients must learn to adapt to the changing diet patterns. The appetite of cancer patients is very different from that of healthy people. The cancer treatment often leads to a loss of appetite, nausea, and fatigue. These factors can make it difficult for the patient to maintain a healthy diet. The doctors usually recommend that their patients eat small portions frequently throughout the day instead of three large meals. They also recommend avoiding foods that are high in fat or sugar because these foods can lead to weight gain and increased risk of diabetes which will only worsen the health condition.</p>

    <h3>Avoid certain foods</h3>
    <p>Cancer patients need to cut out specific foods for their bodies not to be overwhelmed by the disease and its treatment. They should avoid high-fat foods, refined sugar, and salt. They are also advised against coffee and alcohol. Tobacco is not recommended for cancer patients because it can cause heart disease and lung cancer.</p>
    
    <h3>Don't follow a generalized diet</h3>
    <p>Cancer is a complex disease. The Diet of a cancer patient can affect the tumor size and growth rate of cancer cells. There are many different diets for cancer patients but none of them is proven to be 100% effective for every patient. This is because every individual's body has a different way of coping with the disease. Some people might need to eat more protein, for example, while others will need more carbohydrates or fats. So, consult the best cancer dieticians in Pune for a balanced diet and avoid what people suggest based on random cancer myths.</p>
    
    <h3>A balanced diet is key!</h3>
    <p>Following a recommended diet will surely help you stay healthy enough to give cancer a tough fight. Although the type of fruits, vegetables can differ as per your body's nutritional needs, there are some tips that every cancer patient can follow.</p>
    
    <ul>
      <li>Eat at least three to four servings of fruits and vegetables every day.</li>
      <li>Balance your calories by eating small meals throughout the day.</li>
      <li>Processed and packaged foods that are primarily high in fat and sodium are best avoided.</li>
      <li>Make sure to drink 8-10 glasses of water a day.</li>
      <li>Sodium-rich foods like papal, chutneys, pickles, salted popcorn should be avoided.</li>
    </ul>
    
    `,
    
  },
  {
    id: 2,
    title: "Implantation Bleeding Vs Periods",
    description: "Symptoms, Diagnosis & Treatment",
    image: "/bleeding.jpeg",
    fullContent: `
    <h2>Implantation bleeding vs period: Differences</h2>
    <p style="text-align: justify;">Women need to know the main differences between implantation bleeding and a periods to spot early signs of pregnancy. These two types of bleeding have unique features that make them different from each other.</p>

    <h3 style="text-align: justify;">Colour and Consistency</h3>
    <p style="text-align: justify;">Blood colour gives us one of the best ways to tell them apart. Implantation bleeding looks light pink to dark brown (rust-coloured), but period blood starts bright red and might turn darker red. The texture is also different – implantation bleeding shows up as light spotting, like vaginal discharge, while period blood is thicker and might have clots.</p>

    <h3 style="text-align: justify;">Flow and Duration</h3>
    <p style="text-align: justify;">The amount and length of bleeding are vital ways to tell them apart:</p>
    <ul style="text-align: justify;">
      <li><strong>Implantation Bleeding:</strong>
        <ul>
          <li>Lasts 1–3 days</li>
          <li>Light spotting you might only notice when wiping</li>
          <li>A pantyliner usually does the job</li>
          <li>No clots show up</li>
        </ul>
      </li>
      <li><strong>Menstrual Bleeding:</strong>
        <ul>
          <li>Lasts 3–7 days</li>
          <li>Starts light and gets heavier</li>
          <li>You'll need to change pads often</li>
          <li>Blood clots might appear</li>
        </ul>
      </li>
    </ul>

    <h3 style="text-align: justify;">Timing and Occurrence</h3>
    <p style="text-align: justify;">Implantation bleeding happens at a specific point in conception. You will usually see it 6–12 days after ovulation. Period bleeding starts about 14 days after ovulation if you are not pregnant. One out of every four pregnant people see implantation bleeding. This makes it common, but only some experience it.</p>
    <h3>Cramping Differences</h3>
      <p>Cramping feels different between implantation and periods. Implantation cramps spread across your lower abdomen, pelvic area, or lower back. Period cramps feel more intense and might be more assertive on one side when your ovary releases an egg.</p>
      
      <h3>Volume and Pattern</h3>
      <p>The amount of blood gives us another clear way to tell them apart:</p>
      <ul>
        <li><strong>Implantation bleeding:</strong> Stays very light - you might only need a thin pad, and it won't soak through several or pass clots</li>
        <li><strong>Period bleeding:</strong> Follows a pattern you can predict, starting lighter and getting heavier in the first few days</li>
      </ul>
      
      <h3>Associated Symptoms</h3>
      <p>The symptoms that come with each type of bleeding can help you tell them apart:</p>
      <ul>
        <li><strong>Implantation Symptoms:</strong>
          <ul>
            <li>Mild cramping that feels like prickling or tingling</li>
            <li>You might feel bloated or constipated</li>
            <li>PMS symptoms don't show up</li>
          </ul>
        </li>
        <li><strong>Period Symptoms:</strong>
          <ul>
            <li>Stronger cramping</li>
            <li>PMS symptoms like mood swings show up</li>
            <li>Bloating and tender breasts are common</li>
          </ul>
        </li>
      </ul>
      
      <h3>Additional Identifying Factors</h3>
      <p>Here's what else to look for when trying to spot implantation bleeding:</p>
      <ul>
        <li><strong>Consistency of Flow:</strong>
          <ul>
            <li>Implantation shows up as occasional spotting</li>
            <li>Period blood flows more steadily</li>
          </ul>
        </li>
        <li><strong>Physical Characteristics:</strong>
          <ul>
            <li>Implantation bleeding never has clots</li>
            <li>Period blood mixes with uterine tissue and forms clots</li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  },
  {
    id: 3,
    title: "Tuberculosis",
    description: "Raising Awareness to End TB",
    image: "/tuber.jpg",
    fullContent: `
    <div style="text-align: justify; font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Understanding Tuberculosis</h2>
      <p>Tuberculosis is an often-overlooked disease. Many might question the importance of learning more about this illness. However, a lack of awareness and preparedness can cause this disease to fast spiral out of control, affecting many immunocompromised communities.</p>
      
      <h3 style="color: #2980b9;">What is Tuberculosis (TB)?</h3>
      <p>TB is a communicable disease brought about in people by <em>Mycobacterium tuberculosis</em> bacteria. It mainly affects the lungs and can impact other organs of the body. In cases of latent tuberculosis, infected patients don't show any symptoms.</p>
      
    
      
      <h3 style="color: #2980b9; margin-top: 20px;">Why Awareness Matters</h3>
      <p>Tuberculosis remains a significant global health burden, with about 25% of the world's population infected. Current surveys indicate only about 63% awareness about TB prevention measures.</p>
      
      <h3 style="color: #2980b9; margin-top: 20px;">Signs and Symptoms</h3>
      <ul style="padding-left: 20px;">
        <li>Persistent cough (lasting 3+ weeks)</li>
        <li>Unexplained weight loss</li>
        <li>Loss of appetite</li>
        <li>Coughing up blood</li>
        <li>Night sweats</li>
        <li>Fever and fatigue</li>
      </ul>
      
      <h3 style="color: #2980b9; margin-top: 20px;">Risk Factors</h3>
      <p>High-risk groups include:</p>
      <ul style="padding-left: 20px;">
        <li>Close contacts of TB patients</li>
        <li>Immunocompromised individuals</li>
        <li>People with diabetes or kidney disease</li>
        <li>Cancer patients undergoing chemotherapy</li>
        <li>Healthcare workers</li>
      </ul>
      
      <h3 style="color: #2980b9; margin-top: 20px;">Global and National Efforts</h3>
      <p>WHO Europe and UN partners are accelerating testing and response systems. India's 2019 national framework adopts a gender-responsive approach to eliminate TB by 2025, aligned with UN Sustainable Development Goals. The 2020-2021 budget expanded Jan Aushadhi Kendras to provide affordable medicines nationwide.</p>
      
      <p style="margin-top: 30px; font-weight: bold; color: #e74c3c;">This March 24th, on World TB Day, join the commitment to reduce TB stigma and work toward a TB-free future.</p>
      
      
    </div>
  `,
  },
  {
    id: 4,
    title: "Human Metapneumovirus (HMPV)",
    description: "Symptoms, Causes, Diagnosis and Treatment",
    image: "/hmpv.jpg",
    fullContent: `
    <div style="text-align: justify; font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto;">
      <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 8px;">Human Metapneumovirus (HMPV)</h2>
      <p>HMPV is a respiratory virus that causes illnesses ranging from mild cold-like symptoms to severe respiratory infections, particularly in young children, the elderly, and immunocompromised individuals. First identified in 2001, it's less transmissible than COVID-19 but requires similar precautions.</p>

      <h3 style="color: #2980b9; margin-top: 25px;">Is HMPV Just a Cold?</h3>
      <p>While often causing cold-like symptoms, HMPV can lead to more severe conditions including:</p>
      <ul style="padding-left: 20px;">
        <li>Bronchitis</li>
        <li>Pneumonia</li>
        <li>Asthma/COPD exacerbations</li>
      </ul>

      <h3 style="color: #2980b9; margin-top: 25px;">Prevalence</h3>
      <p>HMPV is a leading cause of acute respiratory infections globally. Most people are infected by age 5, with reinfections occurring throughout life.</p>

      <h3 style="color: #2980b9; margin-top: 25px;">Symptoms</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 15px 0;">
        <div style="flex: 1; min-width: 200px;">
          <h4 style="margin-bottom: 8px; color: #16a085;">Common Symptoms</h4>
          <ul style="padding-left: 20px;">
            <li>Runny nose</li>
            <li>Cough</li>
            <li>Fever</li>
            <li>Nasal congestion</li>
            <li>Sore throat</li>
          </ul>
        </div>
        <div style="flex: 1; min-width: 200px;">
          <h4 style="margin-bottom: 8px; color: #16a085;">Severe Symptoms</h4>
          <ul style="padding-left: 20px;">
            <li>Wheezing</li>
            <li>Shortness of breath</li>
            <li>Fatigue</li>
            <li>Respiratory distress</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #2980b9; margin-top: 25px;">Transmission & Risk Factors</h3>
      <p>Primary transmission occurs through:</p>
      <ul style="padding-left: 20px;">
        <li>Contact with contaminated surfaces</li>
        <li>Physical contact with infected persons</li>
        <li>Respiratory droplets</li>
      </ul>
      <p><strong>High-risk groups:</strong> Children under 5, elderly, immunocompromised individuals, and those with chronic respiratory/cardiac conditions.</p>
      <p><strong>Seasonality:</strong> Most common in late winter/early spring.</p>

      <h3 style="color: #2980b9; margin-top: 25px;">Complications</h3>
      <ul style="padding-left: 20px; columns: 2; column-gap: 30px;">
        <li>Bronchitis</li>
        <li>Pneumonia</li>
        <li>Respiratory failure</li>
        <li>Asthma exacerbations</li>
        <li>Secondary bacterial infections</li>
      </ul>

      <h3 style="color: #2980b9; margin-top: 25px;">Diagnosis</h3>
      <p>Diagnostic methods include:</p>
      <ul style="padding-left: 20px;">
        <li>Physical examination</li>
        <li>PCR or rapid antigen tests (nasal/throat swabs)</li>
        <li>Bronchoscopy with fluid analysis (severe cases)</li>
      </ul>

      <h3 style="color: #2980b9; margin-top: 25px;">Treatment</h3>
      <p>No specific antiviral exists. Management includes:</p>
      <ul style="padding-left: 20px;">
        <li>Rest and hydration</li>
        <li>OTC fever/pain medications</li>
        <li>Oxygen therapy (severe cases)</li>
        <li>Hospitalization (for respiratory distress)</li>
        <li>Ribavirin may be used in extreme cases</li>
      </ul>

      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 30px;">
        <h4 style="color: #e74c3c; margin-top: 0;">Prevention Tips</h4>
        <ul style="padding-left: 20px;">
          <li>Frequent hand washing</li>
          <li>Mask-wearing in high-risk settings</li>
          <li>Covering coughs/sneezes</li>
          <li>Avoiding close contact with infected individuals</li>
          <li>Disinfecting frequently touched surfaces</li>
        </ul>
      </div>
    </div>
  `,
  },
  {
    id: 5,
    title: "Bloating During Ovulation",
    description: "Symptoms, Causes, Diagnosis and Treatment",
    image: "/ovu.jpg",
    fullContent: `
    <div style="text-align: justify; font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 0 15px;">
      <h2 style="color: #8e44ad; border-bottom: 2px solid #9b59b6; padding-bottom: 8px; margin-bottom: 20px;">Bloating During Ovulation: Complete Guide</h2>
      
      <div style="background-color: #f5eef8; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <p style="font-weight: bold; margin-top: 0;">According to NHS studies, bloating is a recognized symptom of ovulation affecting women of reproductive age, caused by complex hormonal changes during this phase.</p>
      </div>

      <h3 style="color: #8e44ad; margin-top: 25px;">Hormonal Causes</h3>
      <p>The primary hormonal changes leading to bloating include:</p>
      <ul style="padding-left: 20px;">
        <li><strong>LH surge:</strong> Triggers ovulation process</li>
        <li><strong>Estrogen drop:</strong> Causes fluid retention</li>
        <li><strong>Progesterone increase:</strong> Slows digestion</li>
        <li><strong>Prostaglandins release:</strong> May cause cramping</li>
      </ul>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin: 25px 0;">
        <div style="flex: 1; min-width: 250px;">
          <h3 style="color: #8e44ad;">Physical Causes</h3>
          <ul style="padding-left: 20px;">
            <li>Ovarian swelling (follicle reaches ~2cm)</li>
            <li>Increased abdominal pressure</li>
            <li>Digestive slowdown</li>
          </ul>
        </div>
        <div style="flex: 1; min-width: 250px;">
          <h3 style="color: #8e44ad;">Lifestyle Factors</h3>
          <ul style="padding-left: 20px;">
            <li>Salt cravings leading to retention</li>
            <li>Fatty food consumption</li>
            <li>Reduced physical activity</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #8e44ad; margin-top: 25px;">Symptoms Timeline</h3>
      <p style="margin-bottom: 5px;">Typically occurs days 11-14 of cycle, lasting:</p>
      <ul style="padding-left: 20px; columns: 2; column-gap: 30px;">
        <li>Few minutes to 48 hours (normal)</li>
        <li>Until next period (in some cases)</li>
        <li>Breast tenderness</li>
        <li>Heightened senses</li>
        <li>Increased libido</li>
        <li>Mild nausea</li>
      </ul>

      <h3 style="color: #8e44ad; margin-top: 25px;">When to Worry</h3>
      <div style="background-color: #f9ebea; padding: 15px; border-radius: 8px; border-left: 4px solid #e74c3c;">
        <p style="font-weight: bold; margin-top: 0;">Consult a doctor if you experience:</p>
        <ul style="padding-left: 20px;">
          <li>Bloating disrupting daily life/sleep</li>
          <li>Symptoms lasting >3 weeks</li>
          <li>Frequent bloating (>12x/month)</li>
          <li>Abdominal lumps or severe pain</li>
          <li>Possible PCOS/endometriosis signs</li>
        </ul>
      </div>

      <h3 style="color: #8e44ad; margin-top: 25px;">Evidence-Based Relief Methods</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h4 style="color: #16a085; margin-top: 0;">Hydration</h4>
          <ul style="padding-left: 20px; margin-bottom: 0;">
            <li>2L water daily</li>
            <li>Herbal teas</li>
            <li>Limit caffeine</li>
          </ul>
        </div>
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h4 style="color: #16a085; margin-top: 0;">Nutrition</h4>
          <ul style="padding-left: 20px; margin-bottom: 0;">
            <li>Low-FODMAP diet</li>
            <li>Reduce salt</li>
            <li>Potassium-rich foods</li>
          </ul>
        </div>
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h4 style="color: #16a085; margin-top: 0;">Lifestyle</h4>
          <ul style="padding-left: 20px; margin-bottom: 0;">
            <li>Gentle exercise</li>
            <li>Stress management</li>
            <li>Probiotic foods</li>
          </ul>
        </div>
      </div>

      <div style="margin-top: 30px; font-size: 0.9em; color: #7f8c8d;">
        <p><strong>Note:</strong> NSAIDs may help but consult your doctor before use. Tracking symptoms in a cycle diary can help identify patterns.</p>
      </div>
    </div>
  `,
  },
  {
    id: 6,
    title: "Cervical Cerclage",
    description: "Types, Procedures, Precautions and Risks",
    image: "/cervii.jpg",
    fullContent: `
    <div style="text-align: justify; font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 0 15px;">
      <h2 style="color: #9c27b0; border-bottom: 2px solid #ab47bc; padding-bottom: 8px; margin-bottom: 20px;">Cervical Cerclage: Comprehensive Guide</h2>
      
      <div style="background-color: #f3e5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <p style="font-weight: bold; margin-top: 0;">Cervical cerclage is a surgical procedure that reinforces the cervix during pregnancy using sutures or synthetic tape to prevent preterm birth, typically performed between 12-14 weeks gestation.</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin: 25px 0;">
        <div style="flex: 1; min-width: 250px;">
          <h3 style="color: #9c27b0;">Procedure Types</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Transvaginal:</strong> Most common, stitches placed through vagina</li>
            <li><strong>Transabdominal:</strong> Through abdominal incision (open or laparoscopic)</li>
          </ul>
        </div>
        <div style="flex: 1; min-width: 250px;">
          <h3 style="color: #9c27b0;">Indications</h3>
          <ul style="padding-left: 20px;">
            <li>History of 2nd trimester losses</li>
            <li>Cervical length <25mm before 24 weeks</li>
            <li>Advanced cervical dilation <24 weeks</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #9c27b0; margin-top: 25px;">Procedure Details</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h4 style="color: #7b1fa2; margin-top: 0;">Preparation</h4>
          <ul style="padding-left: 20px; margin-bottom: 0;">
            <li>Medical history review</li>
            <li>Cervical examination</li>
            <li>Transvaginal ultrasound</li>
          </ul>
        </div>
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h4 style="color: #7b1fa2; margin-top: 0;">During Procedure</h4>
          <ul style="padding-left: 20px; margin-bottom: 0;">
            <li>Performed under anesthesia</li>
            <li>Strong sutures placed</li>
            <li>Cervix securely closed</li>
          </ul>
        </div>
        <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h4 style="color: #7b1fa2; margin-top: 0;">Recovery</h4>
          <ul style="padding-left: 20px; margin-bottom: 0;">
            <li>Observation for several hours</li>
            <li>Mild cramping/bleeding (3 days)</li>
            <li>Activity restrictions</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #9c27b0; margin-top: 25px;">Aftercare Instructions</h3>
      <ul style="padding-left: 20px; columns: 2; column-gap: 30px;">
        <li>Use sanitary pads (no tampons)</li>
        <li>Rest lying on left side</li>
        <li>Maintain hydration</li>
        <li>Empty bladder regularly</li>
        <li>No strenuous activity (2-3 days)</li>
        <li>No sexual activity (2 weeks)</li>
      </ul>

      <div style="background-color: #fce4ec; padding: 15px; border-radius: 8px; border-left: 4px solid #d81b60; margin: 25px 0;">
        <h3 style="color: #c2185b; margin-top: 0;">Potential Risks</h3>
        <ul style="padding-left: 20px; columns: 2; column-gap: 30px;">
          <li>Infection or sepsis</li>
          <li>Cervical damage/scarring</li>
          <li>Bleeding</li>
          <li>Premature rupture</li>
          <li>Preterm labor</li>
          <li>Cervical stenosis</li>
          <li>Tearing during labor</li>
        </ul>
      </div>

      <h3 style="color: #9c27b0; margin-top: 25px;">Cerclage Removal</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 20px;">
        <div style="flex: 1; min-width: 250px;">
          <h4 style="color: #7b1fa2;">Normal Timing</h4>
          <p>36-37 weeks gestation when pregnancy is considered full-term</p>
        </div>
        <div style="flex: 1; min-width: 250px;">
          <h4 style="color: #7b1fa2;">Early Removal Cases</h4>
          <ul style="padding-left: 20px;">
            <li>Active labor</li>
            <li>Vaginal bleeding</li>
            <li>Chorioamnionitis</li>
            <li>Other obstetric emergencies</li>
          </ul>
        </div>
      </div>

      <div style="margin-top: 30px; font-size: 0.9em; color: #7f8c8d; border-top: 1px solid #e1bee7; padding-top: 15px;">
        <p><strong>Note:</strong> Women with cervical insufficiency from prior LEEP procedures or uterine abnormalities may particularly benefit from cerclage. Always consult your OB-GYN for personalized care.</p>
      </div>
    </div>
  `,
  },
];

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <section style={{ padding: "50px", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "30px", color: "black" }}>
        Health Insights: Blogs
      </h2>

      {/* First row */}
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        justifyContent: "center", 
        flexWrap: "wrap",
        marginBottom: "20px"
      }}>
        {blogs.slice(0, 3).map((blog) => (
          <div
            key={blog.id}
            style={{
              width: "385px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "18px", color: "#0d6efd", marginBottom: "10px" }}>
                {blog.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", textAlign: "justify" }}>
                {blog.description}
              </p>
              <button 
                onClick={() => handleReadMore(blog)}
                style={{ 
                  display: "block", 
                  marginTop: "10px", 
                  color: "#16a085", 
                  fontWeight: "bold", 
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0
                }}
              >
                READ MORE +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        justifyContent: "center", 
        flexWrap: "wrap"
      }}>
        {blogs.slice(3, 6).map((blog) => (
          <div
            key={blog.id}
            style={{
              width: "385px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "18px", color: "#0d6efd", marginBottom: "10px" }}>
                {blog.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", textAlign: "justify" }}>
                {blog.description}
              </p>
              <button 
                onClick={() => handleReadMore(blog)}
                style={{ 
                  display: "block", 
                  marginTop: "10px", 
                  color: "#16a085", 
                  fontWeight: "bold", 
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0
                }}
              >
                READ MORE +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing full content */}
      {showModal && selectedBlog && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "800px",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative"
          }}>
            <button 
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer"
              }}
            >
              ×
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                marginBottom: "20px"
              }}
            />
            <div style={{ textAlign: "justify" }}>
  <div dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }} />
</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;