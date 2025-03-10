// Graph and Vertices
//Given an integer n representing number of vertices. Find out how many undirected graphs (not necessarily connected) can be constructed out of a given n number of vertices.

function count(n)
{
    //your code here
    return 2 ** (n * (n - 1) / 2);
}