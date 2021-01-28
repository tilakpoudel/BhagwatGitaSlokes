// import { CircularProgress } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [chapter, setChapter] = useState("1");
  const [chapterText, setchapterText] = useState("");
  const [text, setText] = useState("1");
  const [sloke, setSloke] = useState("");
  const [translation, setTranslation] = useState("");
  const [purport, setPurport] = useState("");
  const [isPending, setisPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bgData = { chapter, chapterText, text, sloke, translation, purport };
    setisPending(true);
    fetch("http://localhost:7500/bg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bgData),
    }).then(() => {
      setisPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Sloke</h2>
      <form onSubmit={handleSubmit}>
        <label>Chapter:</label>
        <select value={chapter} onChange={(e) => setChapter(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
        </select>

        <label>Chapter Text:</label>
        <input
          type="text"
          required
          placeholder="Chapter name ...Eg. Karma Yog"
          value={chapterText}
          onChange={(e) => setchapterText(e.target.value)}
        />
        <label>Text Number:</label>

        <select value={text} onChange={(e) => setText(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
          <option value="49">49</option>
          <option value="50">50</option>
          <option value="51">51</option>
          <option value="52">52</option>
          <option value="53">53</option>
          <option value="54">54</option>
          <option value="55">55</option>
          <option value="56">56</option>
          <option value="57">57</option>
          <option value="58">58</option>
          <option value="59">59</option>
          <option value="60">60</option>
          <option value="61">61</option>
          <option value="62">62</option>
          <option value="63">63</option>
          <option value="64">64</option>
          <option value="65">65</option>
          <option value="66">66</option>
          <option value="67">67</option>
          <option value="68">68</option>
        </select>

        <label>Sloke:</label>
        <textarea
          required
          value={sloke}
          placeholder="मयि सर्वाणि कर्माणि सन्न्यस्याध्यात्मचेतसा ।
निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ॥ ३० ॥"
          onChange={(e) => setSloke(e.target.value)}
        ></textarea>

        <label>Transaltion:</label>
        <textarea
          required
          value={translation}
          placeholder="Therefore, O Arjuna, surrendering all your works unto Me, with full knowledge of Me, without desires for profit, with no claims to proprietorship, and free from lethargy, fight."
          onChange={(e) => setTranslation(e.target.value)}
        ></textarea>

        <label>Purport:</label>
        <textarea
          required
          value={purport}
          placeholder="Therefore, O Arjuna, surrendering all your works unto Me, with full knowledge of Me, without desires for profit, with no claims to proprietorship, and free from lethargy, fight."
          onChange={(e) => setPurport(e.target.value)}
        ></textarea>
        {isPending == true ? (
          <div>
            <CircularProgress />
            <br />
            <button disabled>Adding Sloke .... </button>
          </div>
        ) : (
          <div>
            <button>Add Sloke</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Create;
