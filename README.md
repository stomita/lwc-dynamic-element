# LWC Dynamic Element

A reusable component that renders dynamic component element UI

## Install using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

-   Enable Dev Hub in your Trailhead Playground
-   Install Salesforce CLI
-   Install Visual Studio Code
-   Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

2. If you haven't already done so, authenticate with your hub org and provide it with an alias (**myhuborg** in the command below):

```
sfdx force:auth:web:login -d -a myhuborg
```

3. Clone the lwc-dynamic-element repository:

```
git clone https://github.com/stomita/lwc-dynamic-element
cd lwc-dynamic-element
```

4. Create a scratch org and provide it with an alias

```
sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-dynamic-element
```

5. Push the app to your scratch org:

```
sfdx force:source:push
```

6. Open the scratch org:

```
sfdx force:org:open
```

7. Go to **Home** tab, and select "Edit Page" from menu to lauch Lightning App Builder.

8. Put "dynamicElementTestApp" component onto the area in the page, and save.

