
import  *  as kubernetes from '@backstage/plugin-kubernetes';
//import * as artifactory from '@internal/plugin-otom8o-artifactory';
import * as techdocs from '@backstage/plugin-techdocs'
import * as githubactions from '@backstage/plugin-github-actions'
import * as githubprboard from '@backstage/plugin-github-pull-requests-board'

type PluginEntity = {
    path: string;
    title: string;
    MyEntity: (props: any) => JSX.Element | null;
    props: Map<string, string> | null;
};

export const mgrPlugins: PluginEntity[] = ([
{ 
    path: "kubernetes",
    title: "K8s",
    MyEntity: kubernetes.EntityKubernetesContent,
    props: new Map<string,string>([[ "refreshIntervalMs", "30000"],]), 
},
// {
//     path: "artifactory",
//     title: "Artifactory",
//     MyEntity: artifactory.EntityOtom8OArtifactoryContent,
//     props: new Map<string,string>() 
// },
{
    path: "docs",
    title: "Docs",
    MyEntity: techdocs.EntityTechdocsContent,
    props: null
},
{
    path: "github-action",
    title: "Github Actions",
    MyEntity: githubactions.EntityGithubActionsContent,
    props: null 
},
{
    path: "pull-requests",
    title: "Github Pull Requests",
    MyEntity: githubprboard.EntityTeamPullRequestsContent,
    props: null 
}
]);
