while (true) {
    let first_keywords = {
        "1": "innovative",
        "2": "dynamic",
        "3": "efficient",
        "4": "proactive",
        "5": "robust",
        "6": "collaborative",
        "7": "compelling",
        "8": "strategic",
        "9": "cutting-edge",
        "10": "visionary",
    }
    
    let randdom_first_keyword = first_keywords[Math.floor(Math.random() * 10)];
    
    let second_keywords = {
        "1": "solutions",
        "2": "initiatives",
        "3": "platforms",
        "4": "technologies",
        "5": "services",
        "6": "solutions",
        "7": "initiatives",
        "8": "platforms",
        "9": "technologies",
        "10": "services",
    }
    
    let randdom_second_keyword = second_keywords[Math.floor(Math.random() * 10)];
    
    let third_keywords = {
        "1": "end-to-end",
        "2": "value-added",
        "3": "best-of-breed",
        "4": "cutting-edge",
        "5": "innovative",
        "6": "end-to-end",
        "7": "value-added",
        "8": "best-of-breed",
        "9": "cutting-edge",
        "10": "innovative",
    }
    
    let random_third_keyword = third_keywords[Math.floor(Math.random() * 10)];
     
    let businessname = `${randdom_first_keyword} ${randdom_second_keyword} ${random_third_keyword}`;
     console.log(businessname);
} 