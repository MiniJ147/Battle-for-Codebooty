import {Box, Button, HStack} from "@chakra-ui/react";
import {useState} from "react";
import ProblemPanel from "../../components/ProblemPanel.jsx";
import SourceEditor from "../../components/SourceEditor.jsx";
import IOEditor from "../../components/IOEditor.jsx";
import PythonEditor from "../../components/PythonEditor.jsx";
import CppEditor from "../../components/CppEditor.jsx";
import JavaEditor from "../../components/JavaEditor.jsx";

export const Match = () => {
  let problem = {};

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(problemEndpoint)
  //     result.json().then(json => {
  //       console.log(json);
  //       problem = json;
  //     })
  //   }
  //   fetchData();
  // }, []);

  problem = {
    "titeSlug": "alternating-groups-iii",
    "rating": 2316,
    "topics": [
      "Array",
      "Binary Indexed Tree"
    ],
    "created": 1728125957,
    "content": "\u003cp\u003eThere are some red and blue tiles arranged circularly. You are given an array of integers \u003ccode\u003ecolors\u003c/code\u003e and a 2D integers array \u003ccode\u003equeries\u003c/code\u003e.\u003c/p\u003e\n\n\u003cp\u003eThe color of tile \u003ccode\u003ei\u003c/code\u003e is represented by \u003ccode\u003ecolors[i]\u003c/code\u003e:\u003c/p\u003e\n\n\u003cul\u003e\n\t\u003cli\u003e\u003ccode\u003ecolors[i] == 0\u003c/code\u003e means that tile \u003ccode\u003ei\u003c/code\u003e is \u003cstrong\u003ered\u003c/strong\u003e.\u003c/li\u003e\n\t\u003cli\u003e\u003ccode\u003ecolors[i] == 1\u003c/code\u003e means that tile \u003ccode\u003ei\u003c/code\u003e is \u003cstrong\u003eblue\u003c/strong\u003e.\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eAn \u003cstrong\u003ealternating\u003c/strong\u003e group is a contiguous subset of tiles in the circle with \u003cstrong\u003ealternating\u003c/strong\u003e colors (each tile in the group except the first and last one has a different color from its \u003cb\u003eadjacent\u003c/b\u003e tiles in the group).\u003c/p\u003e\n\n\u003cp\u003eYou have to process queries of two types:\u003c/p\u003e\n\n\u003cul\u003e\n\t\u003cli\u003e\u003ccode\u003equeries[i] = [1, size\u003csub\u003ei\u003c/sub\u003e]\u003c/code\u003e, determine the count of \u003cstrong\u003ealternating\u003c/strong\u003e groups with size \u003ccode\u003esize\u003csub\u003ei\u003c/sub\u003e\u003c/code\u003e.\u003c/li\u003e\n\t\u003cli\u003e\u003ccode\u003equeries[i] = [2, index\u003csub\u003ei\u003c/sub\u003e, color\u003csub\u003ei\u003c/sub\u003e]\u003c/code\u003e, change \u003ccode\u003ecolors[index\u003csub\u003ei\u003c/sub\u003e]\u003c/code\u003e to \u003ccode\u003ecolor\u003cfont face=\"monospace\"\u003e\u003csub\u003ei\u003c/sub\u003e\u003c/font\u003e\u003c/code\u003e.\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eReturn an array \u003ccode\u003eanswer\u003c/code\u003e containing the results of the queries of the first type \u003cem\u003ein order\u003c/em\u003e.\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eNote\u003c/strong\u003e that since \u003ccode\u003ecolors\u003c/code\u003e represents a \u003cstrong\u003ecircle\u003c/strong\u003e, the \u003cstrong\u003efirst\u003c/strong\u003e and the \u003cstrong\u003elast\u003c/strong\u003e tiles are considered to be next to each other.\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\u003cp\u003e\u003cstrong class=\"example\"\u003eExample 1:\u003c/strong\u003e\u003c/p\u003e\n\n\u003cdiv class=\"example-block\"\u003e\n\u003cp\u003e\u003cstrong\u003eInput:\u003c/strong\u003e \u003cspan class=\"example-io\"\u003ecolors = [0,1,1,0,1], queries = [[2,1,0],[1,4]]\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eOutput:\u003c/strong\u003e \u003cspan class=\"example-io\"\u003e[2]\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eExplanation:\u003c/strong\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong class=\"example\"\u003e\u003cimg alt=\"\" data-darkreader-inline-bgcolor=\"\" data-darkreader-inline-bgimage=\"\" src=\"https://assets.leetcode.com/uploads/2024/06/03/screenshot-from-2024-06-03-20-14-44.png\" style=\"width: 150px; height: 150px; padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: #181a1b;\" /\u003e\u003c/strong\u003e\u003c/p\u003e\n\n\u003cp\u003eFirst query:\u003c/p\u003e\n\n\u003cp\u003eChange \u003ccode\u003ecolors[1]\u003c/code\u003e to 0.\u003c/p\u003e\n\n\u003cp\u003e\u003cimg alt=\"\" data-darkreader-inline-bgcolor=\"\" data-darkreader-inline-bgimage=\"\" src=\"https://assets.leetcode.com/uploads/2024/06/03/screenshot-from-2024-06-03-20-20-25.png\" style=\"width: 150px; height: 150px; padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: #181a1b;\" /\u003e\u003c/p\u003e\n\n\u003cp\u003eSecond query:\u003c/p\u003e\n\n\u003cp\u003eCount of the alternating groups with size 4:\u003c/p\u003e\n\n\u003cp\u003e\u003cimg alt=\"\" data-darkreader-inline-bgcolor=\"\" data-darkreader-inline-bgimage=\"\" src=\"https://assets.leetcode.com/uploads/2024/06/03/screenshot-from-2024-06-03-20-25-02-2.png\" style=\"width: 150px; height: 150px; padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: #181a1b;\" /\u003e\u003cimg alt=\"\" data-darkreader-inline-bgcolor=\"\" data-darkreader-inline-bgimage=\"\" src=\"https://assets.leetcode.com/uploads/2024/06/03/screenshot-from-2024-06-03-20-24-12.png\" style=\"width: 150px; height: 150px; padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: #181a1b;\" /\u003e\u003c/p\u003e\n\u003c/div\u003e\n\n\u003cp\u003e\u003cstrong class=\"example\"\u003eExample 2:\u003c/strong\u003e\u003c/p\u003e\n\n\u003cdiv class=\"example-block\"\u003e\n\u003cp\u003e\u003cstrong\u003eInput:\u003c/strong\u003e \u003cspan class=\"example-io\"\u003ecolors = [0,0,1,0,1,1], queries = [[1,3],[2,3,0],[1,5]]\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eOutput:\u003c/strong\u003e \u003cspan class=\"example-io\"\u003e[2,0]\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cstrong\u003eExplanation:\u003c/strong\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cimg alt=\"\" data-darkreader-inline-bgcolor=\"\" data-darkreader-inline-bgimage=\"\" src=\"https://assets.leetcode.com/uploads/2024/06/03/screenshot-from-2024-06-03-20-35-50.png\" style=\"width: 150px; height: 150px; padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: #181a1b;\" /\u003e\u003c/p\u003e\n\n\u003cp\u003eFirst query:\u003c/p\u003e\n\n\u003cp\u003eCount of the alternating groups with size 3:\u003c/p\u003e\n\n\u003cp\u003e\u003cimg alt=\"\" data-darkreader-inline-bgcolor=\"\" data-darkreader-inline-bgimage=\"\" src=\"https://assets.leetcode.com/uploads/2024/06/03/screenshot-from-2024-06-03-20-37-13.png\" style=\"width: 150px; height: 150px; padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: #181a1b;\" /\u003e\u003cimg alt=\"\" data-darkreader-inline-bgcolor=\"\" data-darkreader-inline-bgimage=\"\" src=\"https://assets.leetcode.com/uploads/2024/06/03/screenshot-from-2024-06-03-20-36-40.png\" style=\"width: 150px; height: 150px; padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor: #181a1b;\" /\u003e\u003c/p\u003e\n\n\u003cp\u003eSecond query: \u003ccode\u003ecolors\u003c/code\u003e will not change.\u003c/p\u003e\n\n\u003cp\u003eThird query: There is no alternating group with size 5.\u003c/p\u003e\n\u003c/div\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eConstraints:\u003c/strong\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\t\u003cli\u003e\u003ccode\u003e4 \u0026lt;= colors.length \u0026lt;= 5 * 10\u003csup\u003e4\u003c/sup\u003e\u003c/code\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003ccode\u003e0 \u0026lt;= colors[i] \u0026lt;= 1\u003c/code\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003ccode\u003e1 \u0026lt;= queries.length \u0026lt;= 5 * 10\u003csup\u003e4\u003c/sup\u003e\u003c/code\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003ccode\u003equeries[i][0] == 1\u003c/code\u003e or \u003ccode\u003equeries[i][0] == 2\u003c/code\u003e\u003c/li\u003e\n\t\u003cli\u003eFor all \u003ccode\u003ei\u003c/code\u003e that:\n\t\u003cul\u003e\n\t\t\u003cli\u003e\u003ccode\u003equeries[i][0] == 1\u003c/code\u003e: \u003ccode\u003equeries[i].length == 2\u003c/code\u003e, \u003ccode\u003e3 \u0026lt;= queries[i][1] \u0026lt;= colors.length - 1\u003c/code\u003e\u003c/li\u003e\n\t\t\u003cli\u003e\u003ccode\u003equeries[i][0] == 2\u003c/code\u003e: \u003ccode\u003equeries[i].length == 3\u003c/code\u003e, \u003ccode\u003e0 \u0026lt;= queries[i][1] \u0026lt;= colors.length - 1\u003c/code\u003e, \u003ccode\u003e0 \u0026lt;= queries[i][2] \u0026lt;= 1\u003c/code\u003e\u003c/li\u003e\n\t\u003c/ul\u003e\n\t\u003c/li\u003e\n\u003c/ul\u003e\n",
    "exampleTestcases": [
      "[0,1,1,0,1]\n[[2,1,0],[1,4]]",
      "[0,0,1,0,1,1]\n[[1,3],[2,3,0],[1,5]]"
    ],
    "codeSnippets": [
      {
        "lang": "C++",
        "langSlug": "cpp",
        "code": "class Solution {\npublic:\n    vector\u003cint\u003e numberOfAlternatingGroups(vector\u003cint\u003e\u0026 colors, vector\u003cvector\u003cint\u003e\u003e\u0026 queries) {\n        \n    }\n};"
      },
      {
        "lang": "Java",
        "langSlug": "java",
        "code": "class Solution {\n    public List\u003cInteger\u003e numberOfAlternatingGroups(int[] colors, int[][] queries) {\n        \n    }\n}"
      },
      {
        "lang": "Python",
        "langSlug": "python",
        "code": "class Solution(object):\n    def numberOfAlternatingGroups(self, colors, queries):\n        \"\"\"\n        :type colors: List[int]\n        :type queries: List[List[int]]\n        :rtype: List[int]\n        \"\"\"\n        "
      },
      {
        "lang": "Python3",
        "langSlug": "python3",
        "code": "class Solution:\n    def numberOfAlternatingGroups(self, colors: List[int], queries: List[List[int]]) -\u003e List[int]:\n        "
      },
      {
        "lang": "C",
        "langSlug": "c",
        "code": "/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nint* numberOfAlternatingGroups(int* colors, int colorsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {\n    \n}"
      },
      {
        "lang": "C#",
        "langSlug": "csharp",
        "code": "public class Solution {\n    public IList\u003cint\u003e NumberOfAlternatingGroups(int[] colors, int[][] queries) {\n        \n    }\n}"
      },
      {
        "lang": "JavaScript",
        "langSlug": "javascript",
        "code": "/**\n * @param {number[]} colors\n * @param {number[][]} queries\n * @return {number[]}\n */\nvar numberOfAlternatingGroups = function(colors, queries) {\n    \n};"
      },
      {
        "lang": "TypeScript",
        "langSlug": "typescript",
        "code": "function numberOfAlternatingGroups(colors: number[], queries: number[][]): number[] {\n    \n};"
      },
      {
        "lang": "PHP",
        "langSlug": "php",
        "code": "class Solution {\n\n    /**\n     * @param Integer[] $colors\n     * @param Integer[][] $queries\n     * @return Integer[]\n     */\n    function numberOfAlternatingGroups($colors, $queries) {\n        \n    }\n}"
      },
      {
        "lang": "Swift",
        "langSlug": "swift",
        "code": "class Solution {\n    func numberOfAlternatingGroups(_ colors: [Int], _ queries: [[Int]]) -\u003e [Int] {\n        \n    }\n}"
      },
      {
        "lang": "Kotlin",
        "langSlug": "kotlin",
        "code": "class Solution {\n    fun numberOfAlternatingGroups(colors: IntArray, queries: Array\u003cIntArray\u003e): List\u003cInt\u003e {\n        \n    }\n}"
      },
      {
        "lang": "Dart",
        "langSlug": "dart",
        "code": "class Solution {\n  List\u003cint\u003e numberOfAlternatingGroups(List\u003cint\u003e colors, List\u003cList\u003cint\u003e\u003e queries) {\n    \n  }\n}"
      },
      {
        "lang": "Go",
        "langSlug": "golang",
        "code": "func numberOfAlternatingGroups(colors []int, queries [][]int) []int {\n    \n}"
      },
      {
        "lang": "Ruby",
        "langSlug": "ruby",
        "code": "# @param {Integer[]} colors\n# @param {Integer[][]} queries\n# @return {Integer[]}\ndef number_of_alternating_groups(colors, queries)\n    \nend"
      },
      {
        "lang": "Scala",
        "langSlug": "scala",
        "code": "object Solution {\n    def numberOfAlternatingGroups(colors: Array[Int], queries: Array[Array[Int]]): List[Int] = {\n        \n    }\n}"
      },
      {
        "lang": "Rust",
        "langSlug": "rust",
        "code": "impl Solution {\n    pub fn number_of_alternating_groups(colors: Vec\u003ci32\u003e, queries: Vec\u003cVec\u003ci32\u003e\u003e) -\u003e Vec\u003ci32\u003e {\n        \n    }\n}"
      },
      {
        "lang": "Racket",
        "langSlug": "racket",
        "code": "(define/contract (number-of-alternating-groups colors queries)\n  (-\u003e (listof exact-integer?) (listof (listof exact-integer?)) (listof exact-integer?))\n  )"
      },
      {
        "lang": "Erlang",
        "langSlug": "erlang",
        "code": "-spec number_of_alternating_groups(Colors :: [integer()], Queries :: [[integer()]]) -\u003e [integer()].\nnumber_of_alternating_groups(Colors, Queries) -\u003e\n  ."
      },
      {
        "lang": "Elixir",
        "langSlug": "elixir",
        "code": "defmodule Solution do\n  @spec number_of_alternating_groups(colors :: [integer], queries :: [[integer]]) :: [integer]\n  def number_of_alternating_groups(colors, queries) do\n    \n  end\nend"
      }
    ]
  }

  let currentLanguage = 0
  const languages = [
    ["python3", "3.11"],
    ["cpp", "clang17"],
    ["java", "jdk21"]
  ]
  const snippets = [
    problem["codeSnippets"].find(snippet => snippet.langSlug === languages[0][0]).code,
    problem["codeSnippets"].find(snippet => snippet.langSlug === languages[1][0]).code,
    problem["codeSnippets"].find(snippet => snippet.langSlug === languages[2][0]).code
  ]
  const impls = [
    useState(snippets[0]),
    useState(snippets[1]),
    useState(snippets[2])
  ]
  const editors = [
    <PythonEditor key="python3" snippet={impls[0][0]} onChange={(value) => {impls[0][1](value)}} />,
    <CppEditor key="cpp" snippet={impls[1][0]} onChange={(value) => {impls[1][1](value)}} />,
    <JavaEditor key="java" snippet={impls[2][0]} onChange={(value) => {impls[2][1](value)}} />
  ];

  const [language, setLanguage] = useState(languages[0])
  const [editor, setEditor] = useState(editors[0])

  const onEditorSwitch = (idx) => {
    currentLanguage = idx
    setLanguage(languages[idx])
    setEditor(editors[idx])
  }

  return (
    <>
      <h1>Match</h1>
      <Box bg="#0f0a19" color="gray.400">
        <HStack>
          <Box minH="100vh" w='50%' ml={6} mr={3} py={6}>
            <ProblemPanel />
          </Box>
          <Box minH="100vh" w='50%' ml={3} mr={6} py={6}>
            {/*<SelectMenu current={language} options={languages} onSelect={onSelect} />*/}
            <SourceEditor currentLanguage={language} currentEditor={editor} onEditorSwitch={onEditorSwitch} languages={languages} editors={editors}/>
            <IOEditor />
          </Box>
        </HStack>
      </Box>

    </>
  )
}