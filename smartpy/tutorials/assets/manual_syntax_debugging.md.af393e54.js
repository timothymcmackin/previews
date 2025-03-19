import{D as p}from"./chunks/DocFunction.e9a30d9e.js";import{o,c as t,Q as n,C as i,y as c,v as a,a as e,b as l,m as r}from"./chunks/framework.741828c6.js";import{s as d}from"./chunks/variables.b0c7d2f2.js";import"./chunks/DocFunction.vue_vue_type_style_index_0_scoped_21214205_lang.4ed993c7.js";const y=["href"],f=JSON.parse('{"title":"Debugging","description":"","frontmatter":{},"headers":[],"relativePath":"manual/syntax/debugging.md","filePath":"manual/syntax/debugging.md"}'),b={name:"manual/syntax/debugging.md"},w=Object.assign(b,{setup(h){return(g,s)=>(o(),t("div",null,[s[3]||(s[3]=n('<h1 id="debugging" tabindex="-1">Debugging <a class="header-anchor" href="#debugging" aria-label="Permalink to &quot;Debugging&quot;">​</a></h1><p>You can debug SmartPy programs just like any other Python program; just make sure that the Python version that you are using has SmartPy installed.</p><h2 id="logging" tabindex="-1">Logging <a class="header-anchor" href="#logging" aria-label="Permalink to &quot;Logging&quot;">​</a></h2><p>SmartPy includes ways to write debugging information to the console and the compiler log. Within entrypoints, you can print to the console with the <span class="inline shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">sp</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">trace</span></span></code></span> statement.</p>',4)),i(p,{name:"sp.trace",arg:"x"},{default:c(()=>s[0]||(s[0]=[a("p",null,[e("Prints "),a("span",{class:"inline shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#BABED8"}},"x")])])]),e(" to standard error. Does not have any effect in the compiled contract or in the online IDE.")],-1)])),_:1}),a("p",null,[s[1]||(s[1]=e("As an example, consider the ")),a("a",{href:`https://${l(d)}${l(r)("ide?template=fibonacci_view.py")}`,target:"_blank"},"fibonacci_view.py",8,y),s[2]||(s[2]=n(' template. In order to gain a better understanding of which recursive calls are made in which order, we can insert an <span class="inline shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">sp</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">trace</span></span></code></span> statement at the beginning of each call to the main view, resulting in the following code:',3))]),s[4]||(s[4]=n(`<div class="language-smartpy"><button title="Copy Code" class="copy"></button><span class="lang">smartpy</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import smartpy as sp</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">@sp.module</span></span>
<span class="line"><span style="color:#babed8;">def main():</span></span>
<span class="line"><span style="color:#babed8;">    class FibonacciView(sp.Contract):</span></span>
<span class="line"><span style="color:#babed8;">        @sp.onchain_view()</span></span>
<span class="line"><span style="color:#babed8;">        def fibonacci(self, n: sp.int):</span></span>
<span class="line"><span style="color:#babed8;">            sp.trace(n)</span></span>
<span class="line"><span style="color:#babed8;">            if n &lt; 2:</span></span>
<span class="line"><span style="color:#babed8;">                return n</span></span>
<span class="line"><span style="color:#babed8;">            else:</span></span>
<span class="line"><span style="color:#babed8;">                n1 = sp.view(&quot;fibonacci&quot;, sp.self_address, n - 1, int).unwrap_some()</span></span>
<span class="line"><span style="color:#babed8;">                n2 = sp.view(&quot;fibonacci&quot;, sp.self_address, n - 2, int).unwrap_some()</span></span>
<span class="line"><span style="color:#babed8;">                return n1 + n2</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">@sp.add_test()</span></span>
<span class="line"><span style="color:#babed8;">def test():</span></span>
<span class="line"><span style="color:#babed8;">    s = sp.test_scenario(&quot;FibonacciView&quot;, main)</span></span>
<span class="line"><span style="color:#babed8;">    c = main.FibonacciView()</span></span>
<span class="line"><span style="color:#babed8;">    s += c</span></span>
<span class="line"><span style="color:#babed8;">    s.verify(c.fibonacci(5) == 5)</span></span></code></pre></div><p>Now when we run this, a line is printed on standard error for each call to the <span class="inline shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">fibonacci</span></span></code></span> view:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">python</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fibonacci_view.py</span></span>
<span class="line"><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span></span></code></pre></div><p>To print values outside a contract, such as in a test scenario, you can use the ordinary Python <span class="inline shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">()</span></span></code></span> function. In test scenarios you can also use the <span class="inline shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">scenario</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#89DDFF;">()</span></span></code></span> function to print to the compiler log, as described in <a href="/previews/smartpy/tutorials/manual/scenarios/test_scenarios">Test scenarios</a>.</p>`,4))]))}});export{f as __pageData,w as default};
