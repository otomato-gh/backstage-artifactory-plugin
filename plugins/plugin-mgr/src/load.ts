
import  *  as kubernetes from '@backstage/plugin-kubernetes';
import * as artifactory from '@internal/plugin-otom8o-artifactory';


type PluginEntity = {
    path: string;
    title: string;
    MyEntity: (props: any) => JSX.Element;
    props: Map<string, string>;
};

export const mgrPlugins: PluginEntity[] = ([
{ 
    path: "kubernetes",
    title: "K8s",
    MyEntity: kubernetes.EntityKubernetesContent,
    props: new Map<string,string>([[ "refreshIntervalMs", "30000"],]), 
},
{
    path: "artifactory",
    title: "Artifactory",
    MyEntity: artifactory.EntityOtom8OArtifactoryContent,
    props: new Map<string,string>() 
} 
]);
