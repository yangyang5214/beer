<template>
  <div v-html="content">
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data: function () {
      return {
        content: '<div id="readme" class="readme blob instapaper_body">\n' +
        '    <article class="markdown-body entry-content" itemprop="text">\n' +
        '      <p><a target="_blank"\n' +
        '            href="https://camo.githubusercontent.com/a148e6f38544a4e8f9eb6e7e42eb9b0dc4e92a11/68747470733a2f2f79616e6779616e672d313235363532333237372e636f732e61702d7368616e676861692e6d7971636c6f75642e636f6d2f626c6f672f34623038616335656a7731656232743364353034766a3230716531307374626a2e6a7067"><img\n' +
        '        src="https://camo.githubusercontent.com/a148e6f38544a4e8f9eb6e7e42eb9b0dc4e92a11/68747470733a2f2f79616e6779616e672d313235363532333237372e636f732e61702d7368616e676861692e6d7971636c6f75642e636f6d2f626c6f672f34623038616335656a7731656232743364353034766a3230716531307374626a2e6a7067"\n' +
        '        alt=""\n' +
        '        data-canonical-src="https://yangyang-1256523277.cos.ap-shanghai.myqcloud.com/blog/4b08ac5ejw1eb2t3d504vj20qe10stbj.jpg"\n' +
        '        style="max-width:100%;"></a></p>\n' +
        '      <ul>\n' +
        '        <li>java.lang.*</li>\n' +
        '        <li>java.util.*</li>\n' +
        '        <li>java.io.*</li>\n' +
        '        <li>java.net.*</li>\n' +
        '        <li>java.sql.*</li>\n' +
        '      </ul>\n' +
        '      <p>参考;<a href="https://blog.csdn.net/u012682145/article/details/50612748" rel="nofollow">https://blog.csdn.net/u012682145/article/details/50612748</a>\n' +
        '      </p>\n' +
        '      <h3><a id="user-content-javalang" class="anchor" aria-hidden="true" href="#javalang">\n' +
        '        <svg class="octicon octicon-link" viewbox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">\n' +
        '          <path fill-rule="evenodd"\n' +
        '                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>\n' +
        '        </svg>\n' +
        '      </a>java.lang.*\n' +
        '      </h3>\n' +
        '      <h4><a id="user-content-包装类" class="anchor" aria-hidden="true" href="#包装类">\n' +
        '        <svg class="octicon octicon-link" viewbox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">\n' +
        '          <path fill-rule="evenodd"\n' +
        '                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>\n' +
        '        </svg>\n' +
        '      </a>包装类\n' +
        '      </h4>\n' +
        '      <table>\n' +
        '        <thead>\n' +
        '        <tr>\n' +
        '          <th>byte</th>\n' +
        '          <th>Byte</th>\n' +
        '          <th>1</th>\n' +
        '        </tr>\n' +
        '        </thead>\n' +
        '        <tbody>\n' +
        '        <tr>\n' +
        '          <td>char</td>\n' +
        '          <td>Character</td>\n' +
        '          <td>2</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '          <td>int</td>\n' +
        '          <td>Integer</td>\n' +
        '          <td>4</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '          <td>long</td>\n' +
        '          <td>Long</td>\n' +
        '          <td>8</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '          <td>float</td>\n' +
        '          <td>Float</td>\n' +
        '          <td>4</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '          <td>double</td>\n' +
        '          <td>Double</td>\n' +
        '          <td>8</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '          <td>boolean</td>\n' +
        '          <td>Boolean</td>\n' +
        '          <td>1</td>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '          <td>short</td>\n' +
        '          <td>Short</td>\n' +
        '          <td>2</td>\n' +
        '        </tr>\n' +
        '        </tbody>\n' +
        '      </table>\n' +
        '      <h4><a id="user-content-string" class="anchor" aria-hidden="true" href="#string">\n' +
        '        <svg class="octicon octicon-link" viewbox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">\n' +
        '          <path fill-rule="evenodd"\n' +
        '                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>\n' +
        '        </svg>\n' +
        '      </a>String\n' +
        '      </h4>\n' +
        '      <p>length()</p>\n' +
        '      <p>equals() //依次字符比较</p>\n' +
        '      <pre><code> public boolean equals(Object anObject) {\n' +
        '        if (this == anObject) {\n' +
        '            return true;\n' +
        '        }\n' +
        '        if (anObject instanceof String) {\n' +
        '            String anotherString = (String)anObject;\n' +
        '            int n = value.length;\n' +
        '            if (n == anotherString.value.length) {\n' +
        '                char v1[] = value;\n' +
        '                char v2[] = anotherString.value;\n' +
        '                int i = 0;\n' +
        '                while (n-- != 0) {\n' +
        '                    if (v1[i] != v2[i])\n' +
        '                        return false;\n' +
        '                    i++;\n' +
        '                }\n' +
        '                return true;\n' +
        '            }\n' +
        '        }\n' +
        '        return false;\n' +
        '    }\n' +
        '</code></pre>\n' +
        '      <p>concat() //拼接字符串</p>\n' +
        '      <pre><code>public String concat(String str) {\n' +
        '        int otherLen = str.length();\n' +
        '        if (otherLen == 0) {\n' +
        '            return this;\n' +
        '        }\n' +
        '        int len = value.length;\n' +
        '        char buf[] = Arrays.copyOf(value, len + otherLen);\n' +
        '        str.getChars(buf, len);\n' +
        '        return new String(buf, true);\n' +
        '}\n' +
        '\n' +
        'public static char[] copyOf(char[] original, int newLength) {\n' +
        '        char[] copy = new char[newLength];\n' +
        '        System.arraycopy(original, 0, copy, 0,\n' +
        '                         Math.min(original.length, newLength));\n' +
        '        return copy;\n' +
        '}\n' +
        '\n' +
        'void getChars(char dst[], int dstBegin) {\n' +
        '        System.arraycopy(value, 0, dst, dstBegin, value.length);\n' +
        '}\n' +
        '\n' +
        ' /**\n' +
        '     * 将数组src，从 srcPos 索引开始，复制到数组 dest,destPos索引开始，复制的长度为length\n' +
        '     *\n' +
        '     * @param src     the source array.\n' +
        '     * @param srcPos  starting position in the source array.\n' +
        '     * @param dest    the destination array.\n' +
        '     * @param destPos starting position in the destination data.\n' +
        '     * @param length  the number of array elements to be copied.\n' +
        '     */\n' +
        '    public static native void arraycopy(\n' +
        '            Object src, int srcPos,\n' +
        '            Object dest, int destPos,\n' +
        '            int length);\n' +
        '</code></pre>\n' +
        '    </article>\n' +
        '  </div>'
      }
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style scoped>
</style>
