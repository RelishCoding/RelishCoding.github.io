import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as t,d as a,b as p,o}from"./app-Dd-o-6Zm.js";const c={};function d(n,i){return o(),e("div",null,[i[0]||(i[0]=t("p",null,"认识 root 用户、用户和用户组管理、权限控制的查看与修改",-1)),a(" more "),i[1]||(i[1]=p('<h1 id="一、认知-root-用户" tabindex="-1"><a class="header-anchor" href="#一、认知-root-用户"><span>一、认知 root 用户</span></a></h1><h2 id="_1、root-用户-超级管理员" tabindex="-1"><a class="header-anchor" href="#_1、root-用户-超级管理员"><span>1、root 用户（超级管理员）</span></a></h2><p>无论是 Windows 、 MacOS 、 Linux 均采用多用户的管理模式进行权限管理。</p><ul><li><p>在 Linux 系统中，拥有最大权限的账户名为：root（超级管理员）</p></li><li><p>而在前期，我们一直使用的账户是普通的用户：itheima</p></li></ul><img src="https://img.relishcoding.top/redis-learning/01-Redis快速入门/image1.png" alt="image3" style="zoom:50%;"><p>root 用户拥有最大的系统操作权限，而普通用户在许多地方的权限是受限的。</p><p>演示：</p><ul><li>使用普通用户在根目录下创建文件夹</li></ul><figure><img src="https://i-blog.csdnimg.cn/direct/2fb95f30853b49e692a4b2dbd3136407.jpeg" alt="image2" tabindex="0" loading="lazy"><figcaption>image2</figcaption></figure><ul><li>切换到 root 用户后，继续尝试</li></ul><figure><img src="https://i-blog.csdnimg.cn/direct/f3a75ec6f88442299e8595974d3fed19.jpeg" alt="image3" tabindex="0" loading="lazy"><figcaption>image3</figcaption></figure><p>普通用户的权限，一般在其 HOME 目录内是不受限的</p><p>一旦出了 HOME 目录，大多数地方，普通用户仅有只读和执行权限，无修改权限</p><h2 id="_2、su-和-exit-命令" tabindex="-1"><a class="header-anchor" href="#_2、su-和-exit-命令"><span>2、su 和 exit 命令</span></a></h2><p>在前面，我们接触过 su 命令切换到 root 账户。</p><p>su 命令就是用于账户切换的系统命令，其来源英文单词： Switch User</p><p>语法：<code>su [-] [用户名]</code></p><ul><li><p>- 符号是可选的，表示是否在切换用户后加载环境变量（后续讲解），建议带上</p></li><li><p>参数：用户名，表示要切换的用户，用户名也可以省略，省略表示切换到 root</p></li><li><p>切换用户后，可以通过 exit 命令退回上一个用户，也可以使用快捷键：ctrl + d</p></li><li><p>使用普通用户，切换到其它用户需要输入密码，如切换到 root 用户</p></li><li><p>使用 root 用户切换到其它用户，无需密码，可以直接切换</p></li></ul><h2 id="_3、sudo-命令" tabindex="-1"><a class="header-anchor" href="#_3、sudo-命令"><span>3、sudo 命令</span></a></h2><p>在我们得知 root 密码的时候，可以通过 su 命令切换到 root 得到最大权限。但是我们不建议长期使用 root 用户，避免带来系统损坏。</p><p>我们可以使用 sudo 命令，为普通的命令授权，临时以 root 身份执行。</p><p>语法：<code>sudo 其他命令</code></p><ul><li><p>在其它命令之前，带上 sudo ，即可为这一条命令临时赋予 root 授权</p></li><li><p>但是并不是所有的用户，都有权利使用 sudo ，我们需要为普通用户配置 sudo 认证</p></li></ul><h2 id="_4、为普通用户配置-sudo-认证" tabindex="-1"><a class="header-anchor" href="#_4、为普通用户配置-sudo-认证"><span>4、为普通用户配置 sudo 认证</span></a></h2><ul><li><p>切换到 root 用户，执行 visudo 命令，会自动通过 vi 编辑器打开：/etc/sudoers</p></li><li><p>在文件的最后添加： <img src="https://i-blog.csdnimg.cn/direct/7c569206cc0d4e30ba4c360545cee2b1.jpeg" alt="image4" loading="lazy"></p><ul><li>其中最后的 NOPASSWD:ALL 表示使用 sudo 命令，无需输入密码</li></ul></li><li><p>最后通过 wq 保存</p></li><li><p>切换回普通用户</p></li></ul><figure><img src="https://i-blog.csdnimg.cn/direct/348ced20d04142a1adacdcbbe60716a6.jpeg" alt="image5" tabindex="0" loading="lazy"><figcaption>image5</figcaption></figure><ul><li>执行的命令，均以 root 运行</li></ul><h2 id="_5、总结" tabindex="-1"><a class="header-anchor" href="#_5、总结"><span>5、总结</span></a></h2><ol><li>Linux 系统的超级管理员用户是：root 用户</li><li>su 命令</li></ol><ul><li>可以切换用户，语法：<code>su [-] [用户名]</code></li></ul><ul><li>- 表示切换后加载环境变量，建议带上</li><li>用户可以省略，省略默认切换到 root</li></ul><ol start="3"><li>sudo 命令</li></ol><ul><li><p>可以让一条普通命令带有 root 权限，语法：<code>sudo 其他命令</code></p></li><li><p>需要以 root 用户执行 visudo 命令，增加配置方可让普通用户有 sud o 命令的执行权限</p></li></ul><h1 id="二、用户、用户组管理" tabindex="-1"><a class="header-anchor" href="#二、用户、用户组管理"><span>二、用户、用户组管理</span></a></h1><h2 id="_1、用户、用户组" tabindex="-1"><a class="header-anchor" href="#_1、用户、用户组"><span>1、用户、用户组</span></a></h2><p>Linux 系统中可以：</p><ul><li><p>配置多个用户</p></li><li><p>配置多个用户组</p></li><li><p>用户可以加入多个用户组中</p></li></ul><p>Linux 中关于权限的管控级别有 2 个级别，分别是：</p><ul><li><p>针对用户的权限控制</p></li><li><p>针对用户组的权限控制</p></li></ul><p>比如，针对某文件，可以控制用户的权限，也可以控制用户组的权限。</p><p>所以，我们需要学习在 Linux 中进行用户、用户组管理的基础命令，为后面学习权限控制打下基础。</p><figure><img src="https://i-blog.csdnimg.cn/direct/11c772dce6904802ac8f858ffef5299a.jpeg" alt="image1" tabindex="0" loading="lazy"><figcaption>image1</figcaption></figure><h2 id="_2、用户组管理" tabindex="-1"><a class="header-anchor" href="#_2、用户组管理"><span>2、用户组管理</span></a></h2><p>以下命令需 root 用户执行</p><ul><li><p>创建用户组：<code>groupadd 用户组名</code></p></li><li><p>删除用户组：<code>groupdel 用户组名</code></p></li></ul><p>为后续演示，我们创建一个 itcast 用户组：groupadd itcast</p><h2 id="_3、用户管理" tabindex="-1"><a class="header-anchor" href="#_3、用户管理"><span>3、用户管理</span></a></h2><p>以下命令需 root 用户执行</p><ul><li><p>创建用户：<code>useradd [-g -d] 用户名</code></p><ul><li>选项： -g 指定用户的组，不指定 -g ，会创建同名组并自动加入，指定 -g 需要组已经存在，如已存在同名组，必须使用 -g</li></ul></li><li><p>选项： -d 指定用户 HOME 路径，不指定， HOME 目录默认在： /home/用户名</p></li><li><p>删除用户：<code>userdel [-r] 用户名</code></p><ul><li>选项： -r ，删除用户的 HOME 目录，不使用 -r ，删除用户时， HOME 目录保留</li></ul></li><li><p>查看用户所属组：<code>id [用户名]</code></p><ul><li>参数：用户名，被查看的用户，如果不提供则查看自身</li></ul></li><li><p>修改用户所属组：<code>usermod -aG 用户组 用户名</code>，将指定用户加入指定用户组</p></li></ul><h2 id="_4、getent" tabindex="-1"><a class="header-anchor" href="#_4、getent"><span>4、getent</span></a></h2><p>使用 getent 命令，可以查看当前系统中有哪些用户</p><p>语法：<code>getent passwd</code></p><figure><img src="https://i-blog.csdnimg.cn/direct/b5706ee674144931ae13f8489fa4d850.jpeg" alt="image6" tabindex="0" loading="lazy"><figcaption>image6</figcaption></figure><figure><img src="https://i-blog.csdnimg.cn/direct/9ab6536b9e9c4703b9e4f2d58c4cc3e1.jpeg" alt="image7" tabindex="0" loading="lazy"><figcaption>image7</figcaption></figure><p>共有 7 份信息，分别是：</p><blockquote><p>用户名:密码(x):用户ID:组ID:描述信息(无用):HOME 目录: 执行终端 ( 默认 bash)</p></blockquote><p>使用 getent 命令，同样可以查看当前系统中有哪些用户组</p><p>语法： <code>getent group</code></p><figure><img src="https://i-blog.csdnimg.cn/direct/f15fc3297dbd47cda8adfc4bbb5e262f.png" alt="image8" tabindex="0" loading="lazy"><figcaption>image8</figcaption></figure><blockquote><p>包含 3 份信息，组名称 : 组认证 ( 显示为x): 组ID</p></blockquote><h2 id="_5、总结-1" tabindex="-1"><a class="header-anchor" href="#_5、总结-1"><span>5、总结</span></a></h2><ol><li>Linux 用户管理模式</li></ol><ul><li><p>Linux 可以支持多用户、多用户组、用户加入多个组</p></li><li><p>Linux 权限管控的单元是用户级别和用户组级别</p></li></ul><ol start="2"><li>用户、用户组相关管理命令</li></ol><ul><li><p>groupadd 添加组、 groupdel 删除组</p></li><li><p>useradd 添加用户、 userdel 删除用户</p></li><li><p>usermod 修改用户组、 id 命令查看用户信息</p></li><li><p>getent passwd 查看系统全部用户信息</p></li><li><p>getent group 查看系统全部组信息</p></li></ul><h1 id="三、查看权限控制" tabindex="-1"><a class="header-anchor" href="#三、查看权限控制"><span>三、查看权限控制</span></a></h1><h2 id="_1、认知权限信息" tabindex="-1"><a class="header-anchor" href="#_1、认知权限信息"><span>1、认知权限信息</span></a></h2><p>通过 <code>ls -l</code> 可以以列表形式查看内容，并显示权限细节</p><figure><img src="https://i-blog.csdnimg.cn/direct/3b7897a70d9a4746b008e656bcc1033f.jpeg" alt="image9" tabindex="0" loading="lazy"><figcaption>image9</figcaption></figure><ul><li><p>序号 1 ，表示文件、文件夹的权限控制信息</p></li><li><p>序号 2 ，表示文件、文件夹所属用户</p></li><li><p>序号 3 ，表示文件、文件夹所属用户组</p></li></ul><p>让我们来解析一下序号 1 ，权限细节</p><p>权限细节总共分为 10 个槽位：</p><figure><img src="https://i-blog.csdnimg.cn/direct/a32c587e98ad4f57a3a0d338afe1061f.png" alt="image10" tabindex="0" loading="lazy"><figcaption>image10</figcaption></figure><p>举例： drwxr-xr-x ，表示：</p><ul><li><p>这是一个文件夹，首字母 d 表示</p></li><li><p>所属用户 ( 右上角图序号 2) 的权限是：有 r 有w 有x ， rwx</p></li><li><p>所属用户组 ( 右上角图序号 3) 的权限是：有 r 无w 有x ， r-x （ - 表示无此权限）</p></li><li><p>其它用户的权限是：有 r 无w 有x ， r-x</p></li></ul><h2 id="_2、rwx" tabindex="-1"><a class="header-anchor" href="#_2、rwx"><span>2、rwx</span></a></h2><p>那么， rwx 到底代表什么呢？</p><ul><li><p>r 表示读权限</p></li><li><p>w 表示写权限</p></li><li><p>x 表示执行权限</p></li></ul><p>针对文件、文件夹的不同， rwx 的含义有细微差别</p><ul><li><p>r ，针对文件可以查看文件内容</p><ul><li>针对文件夹，可以查看文件夹内容，如 ls 命令</li></ul></li><li><p>w ，针对文件表示可以修改此文件</p><ul><li>针对文件夹，可以在文件夹内：创建、删除、改名等操作</li></ul></li><li><p>x ，针对文件表示可以将文件作为程序执行</p><ul><li>针对文件夹，表示可以更改工作目录到此文件夹，即 cd 进入</li></ul></li></ul><p>案例：</p><figure><img src="https://i-blog.csdnimg.cn/direct/f6f8ed3eaacf444a9edd04234fa77b8e.jpeg" alt="image11" tabindex="0" loading="lazy"><figcaption>image11</figcaption></figure><p>当前用户 itheima ，非文件所属用户和用户组，锁定最后三位权限为： ---，无读取权限</p><figure><img src="https://i-blog.csdnimg.cn/direct/40b3f071e4f74734966b3d40f2a6636c.jpeg" alt="image12" tabindex="0" loading="lazy"><figcaption>image12</figcaption></figure><figure><img src="https://i-blog.csdnimg.cn/direct/98868640068b4f76be423779fd4f1fd3.jpeg" alt="image13" tabindex="0" loading="lazy"><figcaption>image13</figcaption></figure><figure><img src="https://i-blog.csdnimg.cn/direct/3a7ac9d091a24c828fa96ebfb4455f90.jpeg" alt="image14" tabindex="0" loading="lazy"><figcaption>image14</figcaption></figure><h2 id="_3、总结" tabindex="-1"><a class="header-anchor" href="#_3、总结"><span>3、总结</span></a></h2><ol><li><code>ls -l</code> 列出的权限信息如何解读</li></ol><figure><img src="https://i-blog.csdnimg.cn/direct/3b7897a70d9a4746b008e656bcc1033f.jpeg" alt="image9" tabindex="0" loading="lazy"><figcaption>image9</figcaption></figure><ul><li>序号1，表示文件、文件夹的权限控制信息</li><li>序号2，表示文件、文件夹所属用户</li><li>序号3，表示文件、文件夹所属用户组</li></ul><ol start="2"><li>权限细节如何解读</li></ol><figure><img src="https://i-blog.csdnimg.cn/direct/a32c587e98ad4f57a3a0d338afe1061f.png" alt="image10" tabindex="0" loading="lazy"><figcaption>image10</figcaption></figure><ol start="3"><li>rwx 分别代表什么</li></ol><figure><img src="https://i-blog.csdnimg.cn/direct/ff12a92be7044097b79fa83fec13f630.png" alt="image15" tabindex="0" loading="lazy"><figcaption>image15</figcaption></figure><h1 id="四、修改权限控制-chmod" tabindex="-1"><a class="header-anchor" href="#四、修改权限控制-chmod"><span>四、修改权限控制-chmod</span></a></h1><h2 id="_1、chmod-命令" tabindex="-1"><a class="header-anchor" href="#_1、chmod-命令"><span>1、chmod 命令</span></a></h2><p>我们可以使用 chmod 命令，修改文件、文件夹的权限信息。</p><p>注意，只有文件、文件夹的所属用户或 root 用户可以修改。</p><p>语法：<code>chmod [-R] 权限 文件或文件夹</code></p><ul><li>选项： -R ，对文件夹内的全部内容应用同样的操作</li></ul><p>示例：</p><ul><li><p>chmod u=rwx,g=rx,o=x hello.txt ，将文件权限修改为： rwxr-x--x</p><ul><li>其中： u 表示 user 所属用户权限， g 表示 group 组权限， o 表示 other 其它用户权限</li></ul></li><li><p>chmod -R u=rwx,g=rx,o=x test，将文件夹 test 以及文件夹内全部内容权限设置为： rwxr-x--x</p></li></ul><p>除此之外，还有快捷写法： chmod 751 hello.txt</p><p>将hello.txt 的权限修改为 751</p><p>那么问题来了， 751 表示什么意思呢？</p><h2 id="_2、权限的数字序号" tabindex="-1"><a class="header-anchor" href="#_2、权限的数字序号"><span>2、权限的数字序号</span></a></h2><p>权限可以用 3 位数字来代表，第一位数字表示用户权限，第二位表示用户组权限，第三位表示其它用户权限。</p><p>数字的细节如下：r 记为 4 ， w 记为 2 ， x 记为 1 ，可以有：</p><ul><li><p>0 ：无任何权限， 即 ---</p></li><li><p>1 ：仅有 x 权限， 即 --x</p></li><li><p>2 ：仅有 w 权限，即 -w-</p></li><li><p>3 ：有 w 和x 权限，即 -wx</p></li><li><p>4 ：仅有 r 权限，即 r--</p></li><li><p>5 ：有 r 和x 权限，即 r-x</p></li><li><p>6 ：有 r 和w 权限，即 rw-</p></li><li><p>7 ：有全部权限，即 rwx</p></li></ul><p>所以 751 表示： rwx(7) r-x(5) --x(1)</p><p>练习：</p><ul><li><p>将hello.txt 的权限修改为： r-x--xr-x ，数字序号为： chmod 515 hello.txt</p></li><li><p>将hello.txt 的权限修改为： -wx-w-rw- ，数字序号为： chmod 326 hello.txt</p></li><li><p>序号 123 代表的权限是：--x-w--wx</p></li></ul><h2 id="_3、总结-1" tabindex="-1"><a class="header-anchor" href="#_3、总结-1"><span>3、总结</span></a></h2><ol><li>chmod 命令</li></ol><ul><li>功能，修改文件、文件夹的权限细节</li><li>限制，只能是文件、文件夹的所属用户或 root 有权修改</li><li>语法：<code>chmod [-R] 权限 文件或文件夹</code></li><li>选项： -R ，对文件夹内的全部内容应用同样规则</li></ul><ol start="2"><li>权限的数字序号</li></ol><ul><li><p>r 代表 4 ， w 代表 2 ， x 代表 1</p></li><li><p>rwx 的相互组合可以得到从 0 到 7 的 8 种权限组合</p></li><li><p>如 7 代表： rwx ，5 代表： r-x ，1 代表： --x</p></li></ul><h1 id="五、修改权限控制-chown" tabindex="-1"><a class="header-anchor" href="#五、修改权限控制-chown"><span>五、修改权限控制-chown</span></a></h1><p>使用 chown 命令，可以修改文件、文件夹的所属用户和用户组</p><p>普通用户无法修改所属为其它用户或组，所以此命令只适用于 root 用户执行</p><p>语法：<code>chown [-R] [用户][:][用户组] 文件或文件夹</code></p><ul><li>选项， -R ，同 chmod ，对文件夹内全部内容应用相同规则</li></ul><ul><li><p>选项，用户，修改所属用户</p></li><li><p>选项，用户组，修改所属用户组</p></li><li><p>: 用于分隔用户和用户组</p></li></ul><p>示例：</p><ul><li><p>chown root hello.txt ，将 hello.txt 所属用户修改为 root</p></li><li><p>chown :root hello.txt ，将 hello.txt 所属用户组修改为 root</p></li><li><p>chown root:itheima hello.txt ，将 hello.txt 所属用户修改为 root，用户组修改为 itheima</p></li><li><p>chown -R root test ，将文件夹 test 的所属用户修改为 root 并对文件夹内全部内容应用同样规则</p></li></ul>',125))])}const s=l(c,[["render",d],["__file","03-用户和权限.html.vue"]]),h=JSON.parse(`{"path":"/Java%E5%90%8E%E7%AB%AF/Linux/03-%E7%94%A8%E6%88%B7%E5%92%8C%E6%9D%83%E9%99%90.html","title":"03-用户和权限","lang":"zh-CN","frontmatter":{"title":"03-用户和权限","date":"2022-03-08T00:00:00.000Z","category":"Linux","tag":["Linux"],"description":"认识 root 用户、用户和用户组管理、权限控制的查看与修改","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://relishcoding.github.io/Java%E5%90%8E%E7%AB%AF/Linux/03-%E7%94%A8%E6%88%B7%E5%92%8C%E6%9D%83%E9%99%90.html"}],["meta",{"property":"og:site_name","content":"RelishCoding's Blog"}],["meta",{"property":"og:title","content":"03-用户和权限"}],["meta",{"property":"og:description","content":"认识 root 用户、用户和用户组管理、权限控制的查看与修改"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i-blog.csdnimg.cn/direct/2fb95f30853b49e692a4b2dbd3136407.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-03-08T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-用户和权限\\",\\"image\\":[\\"https://i-blog.csdnimg.cn/direct/2fb95f30853b49e692a4b2dbd3136407.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/f3a75ec6f88442299e8595974d3fed19.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/7c569206cc0d4e30ba4c360545cee2b1.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/348ced20d04142a1adacdcbbe60716a6.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/11c772dce6904802ac8f858ffef5299a.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/b5706ee674144931ae13f8489fa4d850.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/9ab6536b9e9c4703b9e4f2d58c4cc3e1.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/f15fc3297dbd47cda8adfc4bbb5e262f.png\\",\\"https://i-blog.csdnimg.cn/direct/3b7897a70d9a4746b008e656bcc1033f.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/a32c587e98ad4f57a3a0d338afe1061f.png\\",\\"https://i-blog.csdnimg.cn/direct/f6f8ed3eaacf444a9edd04234fa77b8e.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/40b3f071e4f74734966b3d40f2a6636c.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/98868640068b4f76be423779fd4f1fd3.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/3a7ac9d091a24c828fa96ebfb4455f90.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/3b7897a70d9a4746b008e656bcc1033f.jpeg\\",\\"https://i-blog.csdnimg.cn/direct/a32c587e98ad4f57a3a0d338afe1061f.png\\",\\"https://i-blog.csdnimg.cn/direct/ff12a92be7044097b79fa83fec13f630.png\\"],\\"datePublished\\":\\"2022-03-08T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"RelishCoding\\",\\"url\\":\\"https://github.com/RelishCoding\\"}]}"]]},"headers":[{"level":1,"title":"一、认知 root 用户","slug":"一、认知-root-用户","link":"#一、认知-root-用户","children":[{"level":2,"title":"1、root 用户（超级管理员）","slug":"_1、root-用户-超级管理员","link":"#_1、root-用户-超级管理员","children":[]},{"level":2,"title":"2、su 和 exit 命令","slug":"_2、su-和-exit-命令","link":"#_2、su-和-exit-命令","children":[]},{"level":2,"title":"3、sudo 命令","slug":"_3、sudo-命令","link":"#_3、sudo-命令","children":[]},{"level":2,"title":"4、为普通用户配置 sudo 认证","slug":"_4、为普通用户配置-sudo-认证","link":"#_4、为普通用户配置-sudo-认证","children":[]},{"level":2,"title":"5、总结","slug":"_5、总结","link":"#_5、总结","children":[]}]},{"level":1,"title":"二、用户、用户组管理","slug":"二、用户、用户组管理","link":"#二、用户、用户组管理","children":[{"level":2,"title":"1、用户、用户组","slug":"_1、用户、用户组","link":"#_1、用户、用户组","children":[]},{"level":2,"title":"2、用户组管理","slug":"_2、用户组管理","link":"#_2、用户组管理","children":[]},{"level":2,"title":"3、用户管理","slug":"_3、用户管理","link":"#_3、用户管理","children":[]},{"level":2,"title":"4、getent","slug":"_4、getent","link":"#_4、getent","children":[]},{"level":2,"title":"5、总结","slug":"_5、总结-1","link":"#_5、总结-1","children":[]}]},{"level":1,"title":"三、查看权限控制","slug":"三、查看权限控制","link":"#三、查看权限控制","children":[{"level":2,"title":"1、认知权限信息","slug":"_1、认知权限信息","link":"#_1、认知权限信息","children":[]},{"level":2,"title":"2、rwx","slug":"_2、rwx","link":"#_2、rwx","children":[]},{"level":2,"title":"3、总结","slug":"_3、总结","link":"#_3、总结","children":[]}]},{"level":1,"title":"四、修改权限控制-chmod","slug":"四、修改权限控制-chmod","link":"#四、修改权限控制-chmod","children":[{"level":2,"title":"1、chmod 命令","slug":"_1、chmod-命令","link":"#_1、chmod-命令","children":[]},{"level":2,"title":"2、权限的数字序号","slug":"_2、权限的数字序号","link":"#_2、权限的数字序号","children":[]},{"level":2,"title":"3、总结","slug":"_3、总结-1","link":"#_3、总结-1","children":[]}]},{"level":1,"title":"五、修改权限控制-chown","slug":"五、修改权限控制-chown","link":"#五、修改权限控制-chown","children":[]}],"readingTime":{"minutes":8.96,"words":2688},"filePathRelative":"Java后端/Linux/03-用户和权限.md","localizedDate":"2022年3月8日","excerpt":"<p>认识 root 用户、用户和用户组管理、权限控制的查看与修改</p>\\n","autoDesc":true}`);export{s as comp,h as data};
